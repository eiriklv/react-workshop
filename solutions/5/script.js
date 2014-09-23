/** @jsx React.DOM */

var Picture = React.createClass({
    clickHandler: function(){
        this.props.onClick(this.props.ref);
    },

    render: function(){

        var cls = 'picture ' + (this.props.favorite ? 'favorite' : '');

        return (
            <div className={cls} onClick={this.clickHandler}>
                <img src={this.props.src} width="200" title={this.props.title} />
            </div>

        );

    }

});

var PictureList = React.createClass({
    getInitialState: function(){
        return { pictures: [], favorites: [] };
    },

    componentDidMount: function(){
        var self = this;

        var url = 'https://api.instagram.com/v1/media/popular?client_id=' + this.props.apiKey + '&callback=?';

        $.getJSON(url, function(result){

            if(!result || !result.data || !result.data.length){
                return;
            }

            var pictures = result.data.map(function(p){

                return { 
                    id: p.id, 
                    url: p.link, 
                    src: p.images.low_resolution.url, 
                    title: p.caption ? p.caption.text : '', 
                    favorite: false 
                };

            });

            self.setState({ pictures: pictures });

        });

    },

    pictureClick: function(id){
        var favorites = this.state.favorites,
            pictures = this.state.pictures;

        for(var i = 0; i < pictures.length; i++){

            if(pictures[i].id == id) {                  

                if(pictures[i].favorite){
                    return this.favoriteClick(id);
                }

                favorites.push(pictures[i]);
                pictures[i].favorite = true;

                break;
            }

        }

        this.setState({pictures: pictures, favorites: favorites});
    },

    favoriteClick: function(id){
        var favorites = this.state.favorites,
            pictures = this.state.pictures;


        for(var i = 0; i < favorites.length; i++){
            if(favorites[i].id == id) break;
        }

        favorites.splice(i, 1);


        for(i = 0; i < pictures.length; i++){
            if(pictures[i].id == id) {
                pictures[i].favorite = false;
                break;
            }
        }

        this.setState({pictures: pictures, favorites: favorites});

    },

    render: function() {

        var self = this;

        var pictures = this.state.pictures.map(function(p){
            return <Picture ref={p.id} src={p.src} title={p.title} favorite={p.favorite} onClick={self.pictureClick} />
        });

        if(!pictures.length){
            pictures = <p>Loading images..</p>;
        }

        var favorites = this.state.favorites.map(function(p){
            return <Picture ref={p.id} src={p.src} title={p.title} favorite={true} onClick={self.favoriteClick} />
        });

        if(!favorites.length){
            favorites = <p>Click an image to mark it as a favorite.</p>;
        }

        return (

            <div>
                <h1>Popular Instagram pics</h1>
                <div className="pictures"> {pictures} </div>
                    
                <h1>Your favorites</h1>
                <div className="favorites"> {favorites} </div>
            </div>

        );
    }
});

React.renderComponent(
    <PictureList apiKey="642176ece1e7445e99244cec26f4de1f" />,
    document.body
);