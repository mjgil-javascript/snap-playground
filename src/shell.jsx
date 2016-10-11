import React from 'react'
import styles from './shell.styl'
import Snap from 'snapsvg'

class Shell extends React.Component {


  componentDidMount() {

    // var s = Snap("#svgLand");
    // var s = Snap(400, 200);
    // var circle = s.circle(100, 100, 100);
    // var rect = s.rect(200, 0, 200, 200);


    /*
    Random Shapes
    var circle = s.circle(200, 200, 150);
            
    circle.attr({
      fill: "#0000ff",
      stroke: "#000",
      strokeWidth: 4
    });

    var rect = s.rect(400, 0, 200, 200);
    var ellipse = s.ellipse(200,200,100,200);
    var roundRect = s.rect(0,500,200,200,20);
    var line = s.line(0,0,400,400);
            line.attr({
               stroke: "#F00" 
            });
    var polygon = s.polyline(0,0,50,50,100,0,150,50,150,150,100,100,50,150,0,100);
    */

    // var base = s.rect(50, 100, 100, 75);
    // var roof = s.polygon(35,100,165,100,100,50);
    // var house = s.g(base, roof);

    // house.attr({
    //    fill: "green"
    // });
    
    // var chimney = s.rect(65,50,15,30);
    // house.add(chimney);
    // base.animate({height: 300}, 1000);


    // const animateHouse = (nextFn) => () => {
    //   house.animate({transform: 't200,0'}, 1000, nextFn)
    // }
    // const animateBase = (height=300, duration=1000, nextFn) => () => {
    //   base.animate({height}, duration, nextFn)
    // }
    // animateBase(300, 1000, animateHouse(animateBase(75, 1000)))()


    // base.animate({height: 300}, 1000, () => {
    //     house.animate({transform: 't200,0'}, 1000, () => {
    //         base.animate({height: 75}, 1000);
    //     });
    // });
    // house.transform("t100,0r45s.5");

    // base.animate({height: 300}, 1000, mina.elastic, function() {
    //     house.animate({transform: 't200,0'}, 1000, mina.easeinout, function() {
    //         base.animate({height: 75}, 1000, mina.elastic);
    //     });
    // });
    // var icon = Snap("#svgLand");

    // Snap.load("/src/svg/icon-house.svg", function(data) {
    //   icon.append(data);
                
    //   var house = icon.select("#house");
    //   house.attr({fill: "white"});
      
    //   var bg = icon.select("#bg");
    //   bg.attr({fill: "#2F62AD"});
      
    //   var ring = icon.select("#ring");
    //   ring.attr({fill: "#2F62AD"});

    //   icon.click(function() {
    //       house.animate({transform: 's1.2,100,100'}, 500, mina.elastic);
    //       ring.animate({transform: 's1.05,100,100'}, 500, mina.elastic);
    //       bg.animate({opacity: .7}, 200);
    //   });

    //   icon.mouseout(function() {
    //       house.animate({transform: 's1,100,100'}, 800, mina.elastic);
    //       ring.animate({transform: 's1,100,100'}, 500, mina.elastic);
    //       bg.animate({opacity: 1}, 200);
    //   });
    // });
    var clock = Snap("#svgLand");

    var date = new Date();
    var hours = date.getHours() % 12;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    const showTime = (secondHand, minuteHand, hourHand) => () => {
      var date = new Date();
      var hours = date.getHours() % 12 * 30;
      var minutes = date.getMinutes() * 6;
      var seconds = date.getSeconds() * 6;
      
      secondHand.transform("r" + seconds + ",150,150");
      minuteHand.transform("r" + minutes + ",150,150");
      hourHand.transform("r" + hours + ",150,150");
    }
    Snap.load("/src/svg/clock.svg", function(data) {
      clock.append(data);

      var secondHand = clock.select("#second_hand");
      var minuteHand = clock.select("#minute_hand");
      var hourHand = clock.select("#hour_hand");
      
      showTime(secondHand, minuteHand, hourHand)()
      setInterval(showTime(secondHand, minuteHand, hourHand), 1000)
    });
  }

  shouldComponentUpdate() {
  }

  render() {
    return <div className={styles.main}>
      <div className={styles.sidebar}>
      </div>
      <div className={styles.content} >
        <svg id='svgLand' style={{height: '100%', width: '100%'}}></svg>
      </div>
    </div>
  }
}

export default Shell
