var Month = React.createClass({
    getInitialState: function() {
        return {
            days:  [
                '','','','','','','',
                '','','','','','','',
                '','','','','','','',
                '','','','','','','',
                '','','','','','',''
            ]
        };
    },
    render: function() {
        return <div>
            <div id='month'>
                { this.state.days.map(function(){
                    return (
                        <Day />
                        );
                }, this) }
            </div>
            <Menu />
        </div>;
    }
});

    var Day = React.createClass({
        render: function() {
            return <div className='day'></div>;
        }
    });
    //The menu (blue)
    var Menu = React.createClass({
        render: function() {
            return <div id='menu'></div>;
        }
    });

   ReactDOM.render(
       <Month />,
       document.getElementById('container')
   );
