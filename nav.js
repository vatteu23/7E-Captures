nav {  position: relative; width: auto;   
		float: right; padding-left: 0px ; }
nav ul{list-style:none; margin:0; padding-left: 5px; padding:0;} 

nav >ul { padding-left: 15px; color: black;}
nav ul ul { display :none; }
nav > ul > li { float: left;} 
nav > ul > li > a { padding: 0px 20px 0px 20px; width: 200px;}


a.btn {
		display: inline-block;
		border: 1px solid rgba(255,255,255,.5);
		padding: 3px 20px 5px 10px;
		text-decoration:none;
		letter-spacing: 2px;
		margin: 10px 0px 10px 0px;
		color: black;
		width: 120px;
		transition-property: all 1s;
		position: relative;
		overflow: hidden;
		}

a.btn:hover {  border-color: black; letter-spacing:5px;} 
ul > li:hover >ul { display: block;}
a.btn::after {
			content:'';
			display: block;
			width: 10px;
			height: 100px;
			background-color: black;
			position: absolute;
			top : 0 px;
			left: -10px;
			transition: left .5s;
			
				}
a.btn:hover::after {left: 10px;}
