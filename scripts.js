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
            <div id="year"> <span id="leftangle"> <i className="fa fa-angle-left"></i></span> {moment().format("MMMM YYYY")} <span id="rightangle"> <i className="fa fa-angle-right"></i></span></div>

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

        </div>;
    }
});

    var Day = React.createClass({
        render: function() {
            return <div className='day'></div>;
        }
    });


ReactDOM.render(
   <Month />,
   document.getElementById('container')
);
