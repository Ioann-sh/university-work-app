import Point from '../entities/Point';
import Edge from '../entities/Edge';
import Polygon from '../entities/Polygon';
import Subject from '../entities/Subject';

function ellipsoid(count = 20, a = 18, b = 14, c = 10) {
    const points = [];
    const edges = [];
    const polygons = [];

    //точки
    const dt = Math.PI * 2 / count;
    for (let i = 0; i <= Math.PI; i += dt) {
        for (let j = 0; j < Math.PI * 2; j += dt) {
            points.push(new Point(
                a * Math.sin(i) * Math.cos(j),
                b * Math.sin(i) * Math.sin(j),
                c * Math.cos(i)
            ));
        }
    }

    //ребра
    for (let i = 0; i < points.length; i++) {
        //вдоль
        if (i + 1 < points.length && (i + 1) % count !== 0) 
            edges.push(new Edge(i, i + 1));
        else if ((i + 1) % count === 0) 
            edges.push(new Edge(i, i + 1 - count));
        //поперек
        if (i < points.length - count) 
            edges.push(new Edge(i, i + count));
    }

    //полигоны
    /*
    for (let i = 0; i < points.length; i++) {
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]))
        }
    }
*/

/*

    for (let i = 0; i < 20 ; i++) {
        let color='#FF0000'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {

            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
        }
    }


    for (let i = 20; i < 40; i++) {
        let color='#ff7f01'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            let color='#ff7f01'
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count],color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
        }
    }
    for (let i = 40; i < 60; i++) {
        let color='#ffff01'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            let color='#ffff01'
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
        }
    }

    for (let i = 60; i < 100; i++) {
        let color='#10ff01'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            let color='#10ff01'
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]), color);
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]), color)
        }
    }
 */



    /*
    for (let i = 60; i < 80; i++) {
        let color='#10ff01'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {

            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
        }
    }

    for (let i = 80; i < 100; i++) {
        let color='#10fff7'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            let color='#10fff7'
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
        }
    }

    for (let i = 100; i < 120; i++) {
        let color='#4682B4'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            let color='#4682B4'
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
        }
    }

    for (let i = 120; i < 140; i++) {
        let color='#4B0082'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            let color='#4B0082'
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
        }
    }

    for (let i = 140; i < 160 ; i++) {
        let color='#FF0000'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {

            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
        }
    }

    for (let i = 160; i < 180; i++) {
        let color='#ff7f01'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            let color='#ff7f01'
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count],color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
        }
    }

    for (let i = 180; i < 200; i++) {
        let color='#ffff01'
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {

            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
        }
    }
*/
    /*
    let colors = ['#FF0000', '#FF4500', '#FFD700', '#ADFF2F', '#00FFFF', '#00008B', '#800080']
    let k =0
    for(let i = 0; i<points.length; i+=1){
        for(let j=i; j<i*10; j++){

            let color= colors[k];
            if (j + 1 + count < points.length && (j + 1) % count !== 0) {
                polygons.push(new Polygon([j, j + 1, j + 1 + count, j + count], colors[k]));
            } else if (j + count < points.length && (j + 1) % count === 0) {
                polygons.push(new Polygon([j, j + 1 - count, j + 1, j + count], colors[k]))
            }
            k+=1;
        }
*/
        let color1 = '#ff0000';
        let color2 = '#ffa600';
        let color3 = '#ffff00';
        let color4 = '#00ff00';
        let color5 = '#00ffff';
        let color6 = '#0000ff';
        let color7 = '#800080';
        let i = 0;
        let d = 1;
        let g = 1;
        let color = color1;
        while (i < points.length - count) {
            while (i < count * g && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
                i++;
            }
            if (i < count * g && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color))
            }
            i = i + 1;
            d++;
            g++;
            if (d === 1) color = color1;
            else if (d === 2) color = color2;
            else if (d === 3) color = color3;
            else if (d === 4) color = color4;
            else if (d === 5) color = color5;
            else if (d === 6) color = color6;
            else if (d === 7) color = color7;
            else if (d === 8) {
                d = 1;
                color = color1;
            }
        }




    return new Subject(points, edges, polygons);
}

export default ellipsoid;