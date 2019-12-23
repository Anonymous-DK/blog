//WF
  
  Array.prototype.isEmptyFrom = function(x,y){
	  for( x;x<y;x++ )
	  if( this[x]!=undefined )
	  return false;
	  return true;
  }
  
  
  function _wf(){
	  
	  var _dyadic = [];
	  var _linear = [];
	  var _row = 4;
	  
	  function _test(){
		  var x,y,msg;
		  for( x=0;x<_dyadic.length;x++ ){
			  msg = "";
			  for( y=0;y<_dyadic[x].length;y++ )
			  msg += _dyadic[x][y]==undefined?0:getWidthBy(_dyadic[x][y]);
			  console.log(msg);
		  }
		  console.log("-----------");
	  }
	  
	  function addContentTo( c,x,y ){
		  var i,len;
		  if( _dyadic[x]==undefined ){
			  len = _dyadic.length;
			  for( i=len;i<x+1;i++ )
				_dyadic[i] = new Array(_row);
		  }
		  
		  if( !_dyadic[x].isEmptyFrom( y, getWidthBy(c) ) )
		  return false;
		  
		  for( i=y; i<y+getWidthBy(c);i++ ){
			  _dyadic[x][i] = c;
		  }
		  //_test();
		  return true;
		  
	  }
	  
	  
	  function addContent( c ){
		  _linear.push( c );
		  addToDyadic( c,getWidthBy(c) );
		  
		  //_test();
	  }
	  
	  function removeContent( c ){
		  
	  }
	  
	  function getWidthBy( content ){
		  
		  if( content.hasClass('content-1') )
		  return 1;
		  else if( content.hasClass('content-2') )
		  return 2;
		  else if( content.hasClass('content-3') )
		  return 3;
		  else if( content.hasClass('content-4') )
		  return 4;
		  else
		  return 0;
		  
	  }
	  
	  function addToDyadic( c,w ){
		  var i,x,y;
		  
		  for( x=0;x<_dyadic.length;x++ ){
			  var xl = _dyadic[x].length;
			  for( y=0;y<xl;y++ ){
				  if( xl-y>=w && _dyadic[x].isEmptyFrom(y,y+w) ){
					  for( i=0;i<w;i++ )
					  _dyadic[x][y+i] = c;
					  return;
				  }
			  }
		  }
		  
		  _dyadic.push(new Array(_row));
		  for( i=0;i<w;i++ )
		  _dyadic[_dyadic.length-1][i] = c;
		  
	  }
	  
	  function getLT( x,y ){
		  var t=0,i;
		  //if(x && _dyadic[x-1][y])
		  for( i=0;i<x;i++ ){
			  if( _dyadic[i][y] )
			  t += _dyadic[i][y].outerHeight(true);
		  }
		  //t = parseInt(_dyadic[x-1][y].css("top"))+_dyadic[x-1][y].outerHeight(true);
		  return { "left" : y*248, "top" : t }
	  }
	  
	  function length(){
		  return _linear.length;
	  }
	  
	  function sort(){
		  var x=0,y=0,c;
		  while( x<_dyadic.length ){
			  if(y==_dyadic[x].length){
				  y=0;
				  x++;
			  }
			  else{
				  c = _dyadic[x][y];
				  if(c!=undefined){
					  c.css(getLT(x,y));
					  y+=getWidthBy(c);
				  }
				  else{
					  y++;
				  }
			  }
		  }
	  }
	  
	  function getHeight(){
		  var x,y,r = 0;
		  for(x=0;x<_row;x++){
			  var h = 0;
			  for( y=0;y<_dyadic.length;y++){
				  if( _dyadic[y][x] !=undefined )
				  h+=_dyadic[y][x].outerHeight(true);
			  }
			  if( h>r ) r=h;
		  }
		  return r;
	  }
	  
	  return {
		  addContent : addContent,
		  addContentTo : addContentTo,
		  sort : sort,
		  getHeight	: getHeight
	  }
  }
  
  
  