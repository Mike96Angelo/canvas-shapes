/*******NOTES*******
 * 
 * Created by: Michaelangelo Jong
 * 
 * look at the README file for more information
 * 
*******End of notes*******/

/*******Polygon Object*******/
function Polygon(xPoints,yPoints){
	var x=[];
	var y=[];
	if(xPoints.constructor == Array && yPoints.constructor == Array){
		x=xPoints;
		y=yPoints;
	}
	this.set=set;
	this.set();
//Attributes
	function set(){
		var i=0;
		var wi=x[i];
		var hi=y[i];
		while(i<x.length){
			if(wi>x[i]){
				wi=x[i];
			}
			if(hi>y[i]){
				hi=y[i];
			}
			i++;
		}
		i=0;
		var wf=x[i];
		var hf=y[i];
		while(i<x.length){
			if(wf<x[i]){
				wf=x[i];
			}
			if(hf<y[i]){
				hf=y[i];
			}
			i++;
		}
		this.xPoints=x;
		this.yPoints=y;
		this.xCenter=wi+(wf-wi)/2;
		this.yCenter=hi+(hf-hi)/2;
		this.height=hf-hi;
		this.width=wf-wi;
		this.xCoor=wi;
		this.yCoor=hi;
		this.sides=x.length;
	}	
//Methods
	this.addPoint=addPoint;
	this.removePoint=removePoint;
	this.movePoint=movePoint;
	this.reset=reset;
	this.translate=translate;
	this.moveTo=moveTo;
	this.resize=resize;
	this.contains=contains;
//Method Actions
	function addPoint(xPoint, yPoint, pointIndex){
		if(typeof pointIndex === 'number'){
			pointIndex=pointIndex;
		}else{
			pointIndex=x.length;
		}
		if(typeof xPoint === 'number' && typeof yPoint === 'number'){
			x.splice(pointIndex,0,xPoint);
			y.splice(pointIndex,0,yPoint);
		}
		this.set();
	}
	function removePoint(pointIndex){
		if(typeof pointIndex === 'number'){
			x.splice(pointIndex,1);
			y.splice(pointIndex,1);
		}else{
			x.splice(x.length-1,1);
			y.splice(y.length-1,1);
		}
		this.set();
	}
	function movePoint(xPoint, yPoint, pointIndex){
		if(typeof pointIndex === 'number'){
			pointIndex=pointIndex;
		}else{
			pointIndex=x.length-1;
		}
		if(typeof xPoint === 'number' && typeof yPoint === 'number'){
			x.splice(pointIndex,1,xPoint);
			y.splice(pointIndex,1,yPoint);
		}
		this.set();
	}
	function reset(xPoints, yPoints){
		x.splice(0,x.length);
		y.splice(0,y.length);
		if(xPoints.constructor == Array && yPoints.constructor == Array){
			x=xPoints;
			y=yPoints;
		}
		this.set();
	}
	function translate(xMove, yMove){
		if(typeof xMove === 'number' && typeof yMove === 'number'){
			var i=0;
			while(i<x.length){
				x[i]+=xMove;
				y[i]+=yMove;
				i++;
			}
		}
		this.set();
	}
	function moveTo(xMove, yMove){
		if(typeof xMove === 'number' && typeof yMove === 'number'){
			this.translate(-1*(this.xCoor-xMove),-1*(this.yCoor-yMove));
		}
		this.set();
	}
	function resize(sizeMultiplier){
		if(typeof sizeMultiplier === 'number'){
			var xTemp=this.xCoor;
			var yTemp=this.yCoor;
			var i=0;
			while(i<x.length){
				x[i]*=sizeMultiplier;
				y[i]*=sizeMultiplier;
				i++;
			}
		}
		this.set();
		this.translate(-1*(this.xCoor-xTemp),-1*(this.yCoor-yTemp));
	}
	function contains(xPoint, yPoint){
		var pathsCrossed=0;
		var yOfPath=0;
		if(typeof xPoint === 'number' && typeof yPoint === 'number'){
			if(xPoint >= this.xCoor && this.xCoor+this.width >= xPoint  &&  yPoint >= this.yCoor && this.yCoor+this.height >= yPoint){
				x.push(x[0]);
				y.push(y[0]);
				var i=0;
				while(i<x.length-1){
					if(x[i] < xPoint && xPoint < x[i+1]){
						yOfPath=(y[i+1]-y[i])/(x[i+1]-x[i])*(xPoint-x[i])+y[i];
						if(yPoint  >= yOfPath){
							pathsCrossed++;
						}
					}else if(x[i+1] < xPoint && xPoint < x[i]){
						yOfPath=(y[i]-y[i+1])/(x[i]-x[i+1])*(xPoint-x[i])+y[i];
						if(yPoint >= yOfPath){
							pathsCrossed++;
						}
					}else if(xPoint==x[i]){
						if(yPoint==y[i]){return true;}
						if((x[i-1]<=x[i]&&x[i]<=x[i+1])||(x[i-1]>=x[i]&&x[i]>=x[i+1])){
							if(yPoint >= y[i]){
								pathsCrossed++;
							}
						}
					}
					i++;
				}
				x.pop();
				y.pop();
				if(pathsCrossed%2 == 1){
					return true;
				}else{
					return false;
				}
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
}
/*******Canvas methods to draw polygons*******/
CanvasRenderingContext2D.prototype.strokePolygon=function(x_polygon,y){
	var x=[];
	if(x_polygon.constructor == Polygon){
		x=x_polygon.xPoints;
		y=x_polygon.yPoints;
	}else if(x_polygon.constructor == Array){
		x=x_polygon;
	}
	if(x.constructor == Array && y.constructor == Array){
		var i=0;
		this.beginPath();
		this.moveTo(x[i],y[i]);
		while(i<x.length){
			i++;
			this.lineTo(x[i],y[i]);
		}
		this.closePath();
		this.stroke();
	}
}
CanvasRenderingContext2D.prototype.fillPolygon=function(x_polygon,y){
	var x=[];
	if(x_polygon.constructor == Polygon){
		x=x_polygon.xPoints;
		y=x_polygon.yPoints;
	}else if(x_polygon.constructor == Array){
		x=x_polygon;
	}
	if(x.constructor == Array && y.constructor == Array){
		var i=0;
		this.beginPath();
		this.moveTo(x[i],y[i]);
		while(i<x.length){
			i++;
			this.lineTo(x[i],y[i]);
		}
		this.closePath();
		this.fill();
	}
}
CanvasRenderingContext2D.prototype.clearPolygon=function(x_polygon,y){
	var x=[];
	if(x_polygon.constructor == Polygon){
		x=x_polygon.xPoints;
		y=x_polygon.yPoints;
	}else if(x_polygon.constructor == Array){
		x=x_polygon;
	}
	if(x.constructor == Array && y.constructor == Array){
		var i=0;
		this.globalCompositeOperation = "destination-out";
		this.beginPath();
		this.moveTo(x[i],y[i]);
		while(i<x.length){
			i++;
			this.lineTo(x[i],y[i]);
		}
		this.closePath();
		this.fill();
		this.globalCompositeOperation = "source-over";
	}
}
/*******End of Code*******/
