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
            <div id="year">September 2016</div>
            <br />
            <div id="DaysOfTheWeek">
            <span id="Sunday">Sunday</span> <span id="Monday">Monday</span>
            <span id="Tuesday">Tuesday</span> <span id="Wednesday">Wednesday</span> <span id="Thursday">Thursday</span>  <span id="Friday">Friday</span>
            <span id="Saturday">Saturday</span>
            </div>
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
