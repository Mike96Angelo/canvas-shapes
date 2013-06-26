Polygon-Object-JavaScript
=========================

Make a new Polygon object:

	var polygon = new Polygon(xPoints,yPoints)
		where:
			xPoints is an Array of x coordinates
			yPoints is an Array of y coordinates
		if no arguments:
			an empty polygon will be created
			
Polygon Attributes:

	Polygon.xPoints
		returns an array of x points
		
	Polygon.yPoints
		returns an array of y points
		
	Polygon.xCenter
		returns x coordinate of the centre point of the polygon
		
	Polygon.yCenter
		returns y coordinate of the centre point of the polygon
		
	Polygon.height
		returns the height of the polygon
		
	Polygon.width
		returns the width of the polygon
		
	Polygon.xCoor
		returns the lowest x coordinate of the polygon
		
	Polygon.yCoor
		returns the lowest y coordinate of the polygon
		
	Polygon.sides
		returns the number of sides in the polygon

Polygon Methods:

	Polygon.addPoint(xPoint, yPoint, pointIndex)	
		where:
			xPoint is the x coordinates of the point
			yPoint is the y coordinates of the point
			pointIndex is where the point will be added
		does:
			adds a point to the polygon
		if no argument(pointIndex):
			will add a point on the end
			
	Polygon.removePoint(pointIndex)
		where:
			pointIndex is which point will be removed
		does:
			removes a point from the polygon
		if no argument(pointIndex):
			will remove the last point
			
	Polygon.movePoint(xPoint, yPoint, pointIndex)
		where:
			xPoint is the x coordinates of the point
			yPoint is the y coordinates of the point
			pointIndex is which point will be moved
		does:
			moves a point in the polygon
		if no argument(pointIndex):
			will move the last point
			
	Polygon.reset(xPoints, yPoints)
		where:
			xPoints is an Array of x coordinates
			yPoints is an Array of y coordinates
		does:
			resets all points in polygon
		if no arguments:
			the polygon will be emptyed
			
	Polygon.translate(xMove, yMove)
		where:
			xMove is the amount to move in the x-direction
			yMove is the amount to move in the y-direction
		does:
			translate the polygon
			
	Polygon.moveTo(xMove, yMove)
		where:
			xMove is where to move in the x
			yMove is where to move in the y
		does:
			move the polygon to specified location
			
	Polygon.resize(sizeMultiplier)
		where:
			sizeMultiplier is the scale in which to resize
		does:
			resizes the polygon
			
	Polygon.contains(xPoints, yPoints)
		where:
			xPoint is the x coordinates of the point to be tested
			yPoint is the y coordinates of the point to be tested
		does:
			returns true if the point is inside of the polygon
			returns false if the point is outside of the polygon

CanvasRenderingContext2D Methods for drawing polygons:

	CanvasRenderingContext2D.strokePolygon(x_polygon,yPoints)
		where:
			x_polygon is a Polygon object
			yPoints is not included
			-or-
			x_polygon is an Array of x coordinates
			yPoints is an Array of y coordinates
		does:
			draws the outline of the polygon
			
	CanvasRenderingContext2D.fillPolygon(x_polygon,yPoints)
		where:
			x_polygon is a Polygon object
			yPoints is not included
			-or-
			x_polygon is an Array of x coordinates
			yPoints is an Array of y coordinates
		does:
			draws a filled polygon
			
	CanvasRenderingContext2D.clearPolygon(x_polygon,yPoints)
		where:
			x_polygon is a Polygon object
			yPoints is not included
			-or-
			x_polygon is an Array of x coordinates
			yPoints is an Array of y coordinates
		does:
			clears the area contained in the polygon

Created By:
	
	Michaelangelo Jong
	
