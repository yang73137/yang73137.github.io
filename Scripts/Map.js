﻿//BlockTypeId = {
//    None: 0,
//    Brick: 1,
//    Iron: 2,
//    Grass: 3,
//    Ice: 4,
//    Water: 5,
//    Base1: 6,
//    Base2: 7,
//};

var map1 = "";
map1 += "0,6,1,12|0,7,2,3|";
map1 += "1,1,1,15|1,2,1,15|1,3,1,15|1,4,1,15|1,5,1,3|1,8,1,12|1,9,1,15|1,10,1,15|1,11,1,15|";
map1 += "2,6,1,12|2,7,1,3|";
map1 += "3,1,1,15|3,2,1,15|3,3,1,15|3,4,1,15|3,5,1,3|3,6,1,12|3,7,1,3|3,8,1,12|3,9,1,15|3,10,1,15|3,11,1,15|";
map1 += "5,1,1,15|5,2,1,15|5,3,1,15|5,4,1,3|5,5,1,12|5,6,1,3|5,7,1,12|5,8,1,15|5,9,1,15|5,10,1,3|";
map1 += "6,3,2,15|6,8,1,15|";
map1 += "7,1,1,15|7,2,1,15|7,3,1,15|7,4,1,3|7,5,1,12|7,6,1,3|7,7,1,12|7,8,1,15|7,9,1,15|7,10,1,3|";
map1 += "9,1,1,15|9,2,1,15|9,3,1,15|9,4,1,15|9,5,1,3|9,6,1,12|9,7,1,3|9,8,1,12|9,9,1,15|9,10,1,15|9,11,1,15|";
map1 += "10,6,1,12|10,7,1,3|";
map1 += "11,1,1,15|11,2,1,15|11,3,1,15|11,4,1,15|11,5,1,3|11,8,1,12|11,9,1,15|11,10,1,15|11,11,1,15|";
map1 += "12,6,1,12|12,7,2,3|";

var map2 = "";
map2 += "0,4,3,15|0,5,3,15|0,8,3,15|";
map2 += "1,1,1,15|1,2,1,15|1,5,3,15|1,6,1,15|1,8,1,15|1,9,1,15|1,10,1,15|1,11,1,15|1,12,1,15|";
map2 += "2,6,1,15|";
map2 += "3,0,2,15|3,1,2,15|3,3,1,15|3,4,1,15|3,5,1,3|3,6,1,15|3,7,2,15|3,8,2,15|3,9,1,15|3,10,1,15|3,12,1,15|";
map2 += "4,6,3,15|4,7,3,15|";
map2 += "5,5,1,15|5,6,3,15|5,7,1,15|5,8,1,15|5,9,1,15|5,10,1,15|";
map2 += "6,2,1,15|6,4,2,15|6,6,3,15|6,9,1,15|6,10,1,15|";
map2 += "7,0,2,15|7,1,1,15|7,2,1,15|7,6,2,15|7,7,1,15|7,8,1,15|7,9,1,15|7,10,1,15|";
map2 += "8,5,2,15|";
map2 += "9,1,1,15|9,2,1,15|9,3,2,15|9,4,1,15|9,7,1,15|9,9,1,15|9,11,1,15|9,12,1,15|";
map2 += "10,2,2,15|10,4,3,15|10,5,3,15|10,6,3,15|10,9,2,15|10,12,1,15|";
map2 += "11,1,1,15|11,2,1,15|11,4,1,15|11,6,1,15|11,7,1,15|11,8,1,15|11,9,1,15|11,11,1,15|11,12,1,15|";
map2 += "12,4,2,15|";

var map3 = "";
map3 += "0,2,1,15|0,3,3,15|0,4,3,15|0,5,3,15|0,8,1,15|0,10,1,15|0,11,1,15|0,12,2,15|";
map3 += "1,1,3,15|1,2,3,15|1,3,3,15|1,4,3,15|1,5,3,15|1,6,3,15|1,7,1,12|1,8,1,5|1,11,1,15|1,12,1,15|";
map3 += "2,1,3,15|2,2,3,15|2,3,3,15|2,4,3,15|2,5,3,15|2,8,1,10|2,12,1,15|";
map3 += "3,1,3,15|3,2,3,15|3,3,3,15|3,4,3,15|3,5,3,15|3,7,1,12|3,8,1,15|3,10,2,5|3,11,2,5|";
map3 += "4,0,1,15|4,1,1,15|4,4,1,15|4,8,1,5|";
map3 += "5,4,1,15|5,8,1,10|5,9,1,15|";
map3 += "6,4,1,15|6,5,1,15|6,6,2,15|6,8,1,3|";
map3 += "7,3,1,15|7,4,1,3|7,6,2,15|7,8,1,3|7,9,1,12|7,10,1,3|";
map3 += "8,0,1,15|8,6,2,15|8,9,1,12|8,10,1,3|";
map3 += "9,3,1,15|9,4,1,15|9,7,3,15|9,8,3,15|9,9,3,15|9,10,3,15|9,11,3,15|9,12,1,15|";
map3 += "10,1,2,12|10,3,1,15|10,7,3,15|10,8,3,15|10,9,3,15|10,10,3,15|10,11,3,15|";
map3 += "11,1,2,12|11,3,1,15|11,4,1,10|11,5,1,10|11,6,3,15|11,7,3,15|11,8,3,15|11,9,3,15|11,10,3,15|11,11,3,15|";
map3 += "12,1,2,12|12,3,1,5|12,7,3,15|12,8,3,15|12,9,3,15|";

var map4 = "";
map4 += "0,1,3,15|0,2,3,15|0,3,2,3|0,5,5,15|0,11,3,15|0,12,2,15|";
map4 += "1,0,3,15|1,1,3,15|1,9,1,3|1,10,1,15|1,12,3,15|";
map4 += "2,0,3,15|2,4,1,10|2,5,1,10|2,6,1,15|2,7,1,15|2,8,1,15|2,9,1,3|2,10,1,15|2,11,1,3|";
map4 += "3,2,1,10|3,3,1,15|3,4,1,3|3,7,1,15|3,8,1,15|3,9,1,15|3,10,1,12|3,11,1,3|";
map4 += "4,1,1,12|4,2,1,15|4,3,1,15|4,5,2,5|4,6,1,12|4,7,1,15|4,8,1,15|4,9,1,15|4,10,1,3|";
map4 += "5,1,1,15|5,2,1,15|5,3,1,15|5,6,1,12|5,7,1,15|5,8,1,15|5,9,1,15|5,10,1,15|";
map4 += "6,1,1,15|6,2,1,15|6,3,1,15|6,5,2,5|6,7,1,15|6,8,1,15|6,9,1,15|6,10,1,15|";
map4 += "7,1,1,12|7,2,1,15|7,3,1,15|7,4,1,3|7,7,1,15|7,8,1,15|7,9,1,15|7,10,1,3|";
map4 += "8,1,1,12|8,2,1,15|8,3,1,15|8,4,1,15|8,5,1,15|8,6,1,15|8,7,1,15|8,8,1,15|8,9,1,15|8,10,1,12|8,11,1,3|";
map4 += "9,2,1,15|9,3,1,15|9,4,1,15|9,5,1,5|9,6,1,5|9,7,1,15|9,8,1,15|9,9,1,3|9,10,1,15|9,11,1,3|";
map4 += "10,2,1,12|10,3,1,15|10,8,1,5|10,9,1,3|10,10,1,15|10,12,3,15|";
map4 += "11,0,3,12|11,3,1,5|11,4,1,5|11,6,5,15|11,11,3,15|11,12,3,15|";
map4 += "12,1,3,15|12,2,2,3|12,6,5,15|12,10,3,15|12,11,3,15|12,12,2,15|";

var map5 = "";
map5 += "0,1,2,12|0,2,2,15|0,3,1,15|0,4,1,3|0,6,1,15|0,8,5,15|0,11,1,15|0,12,1,3|";
map5 += "1,6,1,15|1,8,5,15|1,11,1,15|";
map5 += "2,1,1,12|2,2,1,15|2,3,1,15|2,5,1,12|2,8,5,15|2,11,1,3|";
map5 += "3,3,1,15|3,9,1,12|";
map5 += "4,0,1,15|4,1,1,15|4,3,1,15|4,4,1,3|4,5,5,15|4,6,5,15|4,7,5,15|4,8,5,15|4,9,1,12|4,10,1,15|";
map5 += "5,0,1,15|5,5,5,15|5,6,1,15|5,10,1,3|";
map5 += "6,2,1,15|6,3,1,15|6,8,2,15|6,10,1,3|";
map5 += "7,3,1,15|7,5,5,15|7,6,1,15|7,10,1,3|";
map5 += "8,1,2,3|8,5,5,15|8,6,1,5|8,8,1,15|8,10,1,15|";
map5 += "9,1,2,3|9,3,5,15|9,4,5,15|9,5,5,15|9,10,1,12|9,11,1,3|";
map5 += "10,1,2,15|10,3,5,15|10,7,2,10|10,8,2,10|10,9,2,10|10,11,1,15|";
map5 += "11,5,1,15|11,7,2,5|11,9,1,15|";
map5 += "12,3,5,15|12,5,1,15|12,9,1,15|";

var map6 = "";
map6 += "0,5,1,15|0,7,2,15|0,8,2,3|";
map6 += "1,1,1,5|1,2,1,5|1,3,1,15|1,5,1,15|1,7,1,15|1,8,2,3|1,9,1,15|1,10,1,15|";
map6 += "2,1,2,10|2,2,2,10|2,5,1,5|2,7,1,15|2,8,2,3|2,10,1,5|2,11,1,3|2,12,1,12|";
map6 += "3,4,1,10|";
map6 += "4,1,1,5|4,2,1,5|4,3,1,15|4,4,2,3|4,6,1,10|4,7,1,3|4,8,1,12|4,9,1,15|";
map6 += "5,0,1,10|5,5,3,15|5,6,3,15|5,7,3,15|5,10,1,3|";
map6 += "6,2,1,15|6,3,2,15|6,4,1,15|6,5,1,15|6,6,3,15|6,7,3,15|6,8,3,15|";
map6 += "7,0,1,5|7,5,3,15|7,6,3,15|7,7,3,15|7,10,1,3|";
map6 += "8,0,3,15|8,1,1,10|8,2,1,10|8,3,1,15|8,4,1,3|8,6,1,5|8,7,1,3|8,8,1,12|8,9,1,15|";
map6 += "9,0,3,15|9,1,3,15|9,2,3,15|9,3,3,15|9,4,2,5|9,7,1,10|";
map6 += "10,1,1,5|10,2,1,5|10,5,1,10|10,7,1,15|10,8,2,3|10,10,2,12|10,11,3,15|10,12,1,12|";
map6 += "11,1,1,10|11,2,1,10|11,3,1,15|11,4,3,15|11,5,1,15|11,7,1,15|11,8,2,3|11,10,1,15|11,11,3,15|11,12,3,15|";
map6 += "12,1,3,15|12,2,3,15|12,3,3,15|12,4,3,15|12,5,1,15|12,7,2,15|12,8,2,3|12,10,3,15|12,11,3,15|12,12,3,15|";

var map7 = "";
map7 += "0,7,2,5|0,12,2,12|";
map7 += "1,3,2,15|1,5,2,15|1,6,2,10|1,8,2,10|1,9,2,15|1,10,2,3|1,12,2,12|";
map7 += "2,1,2,15|2,2,2,15|2,8,2,15|2,10,2,3|";
map7 += "3,1,2,3|3,5,3,15|3,6,2,15|3,10,2,15|";
map7 += "4,1,2,3|4,4,3,15|4,5,2,15|4,6,2,15|4,7,2,15|";
map7 += "5,1,2,3|5,3,3,15|5,4,2,15|5,5,2,15|";
map7 += "6,2,3,15|6,3,2,15|6,4,2,15|6,5,2,15|";
map7 += "7,0,2,3|7,7,2,15|7,8,2,15|7,9,3,15|";
map7 += "8,0,2,3|8,2,2,3|8,5,2,15|8,6,2,15|8,7,2,15|8,8,3,15|";
map7 += "9,2,2,15|9,6,2,15|9,7,3,15|9,10,2,15|9,11,2,3|";
map7 += "10,1,2,15|10,2,2,15|10,3,2,15|10,4,2,3|10,9,2,15|";
map7 += "11,4,2,15|11,7,2,10|11,8,2,15|11,9,2,15|11,11,2,12|";
map7 += "12,11,2,15|";

var map8 = "";
map8 += "0,1,3,15|0,2,3,15|0,3,3,15|0,6,1,15|0,8,5,15|0,9,3,15|0,10,3,15|0,11,3,15|";
map8 += "1,1,1,15|1,2,3,15|1,3,3,15|1,4,1,15|1,6,1,15|1,8,5,15|1,9,3,15|1,10,3,15|";
map8 += "2,0,1,15|2,1,1,15|2,2,3,15|2,3,5,15|2,5,1,15|2,10,1,15|2,11,1,15|";
map8 += "3,1,1,15|3,3,5,15|3,6,1,15|3,7,2,15|3,8,5,15|3,9,1,10|";
map8 += "4,3,5,15|4,8,5,15|4,10,1,5|4,11,1,5|";
map8 += "5,0,1,15|5,1,1,15|5,2,1,3|5,3,5,15|5,5,1,10|5,6,1,10|5,7,2,12|5,8,5,15|";
map8 += "6,3,5,15|6,4,1,12|6,5,1,15|6,6,1,15|6,8,5,15|6,9,1,12|";
map8 += "7,0,1,12|7,1,2,12|7,2,1,15|7,3,5,15|7,4,1,12|7,5,1,15|7,6,1,15|7,7,3,15|7,8,5,15|7,9,1,12|7,10,1,10|";
map8 += "8,3,5,15|8,5,1,3|8,6,3,15|8,7,3,15|";
map8 += "9,0,1,15|9,1,1,15|9,2,1,3|9,3,5,15|9,5,1,15|9,6,1,15|9,7,3,15|9,8,5,15|9,10,2,12|9,11,1,3|9,12,1,12|";
map8 += "10,1,1,5|10,3,5,15|10,5,1,3|10,6,2,12|10,7,3,15|10,8,5,15|10,10,1,12|";
map8 += "11,2,1,10|11,5,2,3|11,6,2,12|11,8,5,15|11,10,1,15|11,11,1,15|11,12,1,3|";
map8 += "12,2,1,5|12,3,5,15|12,5,2,3|12,6,1,15|12,8,5,15|";

var map9 = "";
map9 += "0,1,1,15|0,6,2,15|0,9,1,15|0,10,1,15|";
map9 += "1,6,1,15|";
map9 += "2,11,1,12|2,3,2,10|2,12,1,15|";
map9 += "3,0,1,15|3,2,2,12|3,3,2,15|3,4,2,3|3,5,3,15|3,6,2,10|3,7,3,15|3,9,2,10|3,10,3,15|3,12,1,15|";
map9 += "4,2,3,15|4,3,2,5|4,4,3,15|4,5,2,12|4,6,2,15|4,7,2,3|4,8,2,12|4,9,2,15|4,10,2,3|";
map9 += "5,2,2,10|5,5,3,15|5,6,2,5|5,7,3,15|5,9,2,5|5,10,3,15|";
map9 += "6,1,2,12|6,2,2,15|6,3,2,3|";
map9 += "7,1,3,15|7,2,2,5|7,3,3,15|7,5,3,15|7,6,2,10|7,7,3,15|7,9,2,10|7,10,3,15|";
map9 += "8,1,2,10|8,5,2,12|8,6,2,15|8,7,2,3|8,8,2,12|8,9,2,15|8,10,2,3|";
map9 += "9,0,2,12|9,1,2,15|9,2,2,3|9,5,3,15|9,6,2,5|9,7,3,15|9,9,2,5|9,10,3,15|9,12,1,15|";
map9 += "10,0,3,15|10,1,2,5|10,2,3,15|10,11,1,12|10,12,1,15|";
map9 += "11,6,1,15|";
map9 += "12,1,1,15|12,6,2,15|12,9,1,15|12,10,1,15|";

var map10 = "";
map10 += "0,2,1,10|0,3,1,15|0,4,1,15|0,5,1,10|0,9,1,15|0,10,1,15|";
map10 += "1,1,1,10|1,2,1,3|1,5,1,12|1,6,1,15|1,9,3,15|1,10,3,15|";
map10 += "2,1,1,3|2,5,1,12|2,6,1,15|2,7,1,15|2,8,1,15|2,9,1,3|2,10,3,15|2,11,3,15|";
map10 += "3,1,1,15|3,4,1,10|3,5,1,15|3,6,1,15|3,7,1,15|3,8,1,15|3,9,1,3|3,10,3,15|3,11,3,15|3,12,1,5|";
map10 += "4,2,1,15|4,3,1,15|4,4,1,15|4,5,5,15|4,6,2,15|4,7,2,15|4,8,1,15|4,9,1,3|4,10,3,15|4,11,3,15|";
map10 += "5,3,3,15|5,4,3,15|5,5,5,15|5,6,2,15|5,8,1,15|5,9,2,15|5,10,3,15|";
map10 += "6,2,3,15|6,3,3,15|6,4,2,15|6,5,5,15|6,6,1,15|6,7,1,15|6,8,1,15|6,9,2,15|6,10,3,15|";
map10 += "7,2,3,15|7,3,3,15|7,4,2,15|7,5,5,15|7,6,2,15|7,8,1,15|7,9,1,3|7,10,3,15|";
map10 += "8,3,3,15|8,4,3,15|8,5,5,15|8,6,2,15|8,7,2,15|8,8,1,15|8,9,1,3|8,10,3,15|8,11,3,15|";
map10 += "9,2,1,15|9,3,1,15|9,4,1,15|9,5,5,15|9,6,1,15|9,7,1,15|9,8,1,15|9,9,1,3|9,10,3,15|9,11,3,15|";
map10 += "10,1,1,15|10,4,1,5|10,5,1,15|10,6,1,15|10,7,1,15|10,8,1,15|10,9,1,3|10,10,3,15|10,11,3,15|10,12,1,5|";
map10 += "11,1,1,3|11,5,1,15|11,6,1,15|11,7,1,5|11,8,1,5|11,9,3,15|11,10,3,15|11,11,3,15|";
map10 += "12,1,1,5|12,2,1,10|12,3,1,10|12,4,1,15|12,5,1,5|12,9,1,15|12,10,1,15|";

var map11 = "";
map11 += "0,8,2,15|0,9,1,10|";
map11 += "1,1,1,10|1,3,1,10|1,4,1,10|1,5,1,3|1,6,1,15|1,8,1,15|1,9,1,15|1,10,1,15|1,12,1,12|";
map11 += "2,1,1,15|2,5,1,3|2,6,1,15|2,9,3,15|2,10,3,15|2,11,3,15|2,12,3,15|";
map11 += "3,1,1,15|3,2,1,5|3,4,1,15|3,5,1,3|3,6,1,15|3,7,2,15|3,8,3,15|3,9,3,15|3,10,3,15|3,11,3,15|3,12,3,15|";
map11 += "4,1,1,15|4,4,1,15|4,5,2,15|4,8,3,15|4,9,3,15|";
map11 += "5,0,2,15|5,1,1,15|5,2,1,15|5,4,1,15|5,4,1,15|5,6,2,15|5,8,3,15|5,9,3,15|";
map11 += "6,4,2,15|6,6,3,15|6,7,3,15|6,8,3,15|6,9,3,15|";
map11 += "7,0,1,15|7,1,1,15|7,2,1,15|7,3,2,15|7,4,1,15|7,5,1,15|7,6,3,15|7,7,3,15|7,8,2,15|";
map11 += "8,2,1,15|8,4,1,15|8,6,3,15|8,7,3,15|8,8,3,15|8,10,2,3|";
map11 += "9,0,1,15|9,3,3,15|9,4,3,15|9,5,3,15|9,6,3,15|9,7,3,15|9,8,3,15|9,10,1,15|9,11,1,15|";
map11 += "10,0,1,15|10,2,3,15|10,3,3,15|10,4,3,15|10,5,3,15|10,6,3,15|10,7,3,15|10,8,3,15|10,10,1,15|";
map11 += "11,2,3,15|11,3,3,15|11,4,1,3|11,7,1,15|11,8,1,15|11,9,1,15|11,10,1,15|11,11,1,10|";
map11 += "12,2,3,15|12,3,3,15|12,4,2,15|12,5,1,10|12,9,1,5|";

var map12 = "";
map12 += "0,5,1,15|0,7,5,15|0,9,1,15|0,11,1,15|";
map12 += "1,1,1,15|1,3,5,15|1,7,5,15|1,9,1,15|";
map12 += "2,1,1,15|2,3,5,15|2,4,2,12|2,5,1,15|2,7,5,15|2,9,1,15|2,10,1,15|";
map12 += "3,1,1,15|3,3,5,15|3,4,2,12|3,5,1,15|";
map12 += "4,1,1,12|4,2,1,15|4,3,5,15|4,4,2,12|4,5,1,15|4,6,2,15|4,7,5,15|4,10,2,3|";
map12 += "5,3,5,15|5,4,5,15|5,5,5,15|5,6,5,15|5,7,5,15|5,8,1,15|5,10,2,3|";
map12 += "6,1,1,12|6,2,1,3|6,5,5,15|6,7,1,15|6,8,2,3|";
map12 += "7,0,1,15|7,3,1,15|7,4,1,15|7,5,5,15|7,7,1,15|7,8,2,3|";
map12 += "8,0,1,15|8,3,1,5|";
map12 += "9,0,1,15|9,1,1,15|9,4,2,15|9,5,5,15|9,6,5,15|9,7,5,15|9,8,5,15|9,10,1,15|9,11,1,15|";
map12 += "10,4,2,5|10,5,1,15|10,6,2,3|10,8,5,15|10,10,1,15|";
map12 += "11,2,1,15|11,3,1,15|11,4,1,15|11,5,1,15|11,8,5,15|";
map12 += "12,2,1,15|12,3,2,3|12,10,1,10|12,11,1,15|";

var map13 = "";
map13 += "0,6,1,15|0,7,1,15|0,8,1,15|0,9,1,15|0,10,1,15|0,11,1,15|0,12,1,15|";
map13 += "1,1,1,15|1,2,1,15|1,3,2,15|1,4,1,15|1,5,1,3|1,6,2,12|1,7,2,15|1,8,1,15|1,9,2,15|1,10,1,15|1,11,1,15|1,12,1,15|";
map13 += "2,1,1,15|2,10,1,15|";
map13 += "3,1,1,15|3,3,1,15|3,4,1,5|3,7,1,5|3,8,1,15|3,10,1,15|";
map13 += "4,0,1,12|4,1,1,15|4,3,1,3|4,4,3,15|4,5,3,15|4,6,3,15|4,7,3,15|4,8,1,12|4,10,1,15|4,11,1,3|";
map13 += "5,4,2,12|5,5,3,15|5,6,3,15|5,7,2,3|";
map13 += "6,2,1,15|6,4,2,15|6,5,3,15|6,6,3,15|6,7,2,15|6,9,1,15|";
map13 += "7,4,2,12|7,5,3,15|7,6,3,15|7,7,2,3|";
map13 += "8,0,1,12|8,1,1,15|8,3,1,3|8,4,3,15|8,5,3,15|8,6,3,15|8,7,3,15|8,8,1,12|8,10,1,15|8,11,1,3|";
map13 += "9,1,1,15|9,3,1,15|9,4,1,10|9,7,1,10|9,8,1,15|9,10,1,15|";
map13 += "10,1,1,15|10,10,1,15|";
map13 += "11,1,1,15|11,2,2,15|11,3,1,15|11,4,2,15|11,5,2,3|11,6,1,12|11,7,1,15|11,8,2,15|11,9,1,15|11,10,2,15|11,11,1,15|";
map13 += "12,3,1,15|12,4,1,15|12,5,1,15|12,6,1,15|12,10,2,15|";

var map14 = "";
map14 += "0,1,3,15|0,2,3,15|0,5,3,15|0,6,3,15|0,7,5,15|0,10,2,10|0,11,1,5|0,12,2,5|";
map14 += "1,1,3,15|1,6,3,15|1,7,5,15|1,10,2,10|1,11,1,5|1,12,2,5|";
map14 += "2,7,5,15|2,10,2,10|2,11,1,5|2,12,2,5|";
map14 += "3,2,1,10|3,3,1,15|3,4,1,15|3,5,1,15|3,12,2,10|";
map14 += "4,1,1,12|4,2,1,15|4,3,1,15|4,4,3,15|4,5,1,15|4,6,1,15|4,7,1,15|4,8,1,10|4,9,1,5|";
map14 += "5,1,1,15|5,2,1,15|5,3,3,15|5,4,3,15|5,5,1,15|5,6,3,15|5,7,1,15|5,8,1,10|5,9,1,5|";
map14 += "6,1,1,15|6,2,1,15|6,3,1,15|6,4,1,15|6,5,1,15|6,6,1,15|6,7,1,15|6,8,1,10|6,9,1,5|";
map14 += "7,1,1,15|7,2,1,15|7,3,3,15|7,4,3,15|7,5,1,15|7,6,3,15|7,7,1,15|7,8,1,10|7,9,1,5|";
map14 += "8,1,1,12|8,2,1,15|8,3,1,15|8,4,3,15|8,5,1,15|8,6,1,15|8,7,1,15|8,8,1,10|8,9,1,5|";
map14 += "9,2,1,5|9,3,1,15|9,4,1,15|9,5,1,15|9,12,2,5|";
map14 += "10,7,5,15|10,10,2,5|10,11,1,10|10,12,2,10|";
map14 += "11,1,3,15|11,6,3,15|11,7,5,15|11,10,2,5|11,11,1,10|11,12,2,10|";
map14 += "12,1,3,15|12,2,3,15|12,5,3,15|12,6,3,15|12,7,5,15|12,10,2,5|12,11,1,10|12,12,2,10|";

var map15 = "";
map15 += "0,2,3,15|0,3,3,15|0,4,3,15|0,7,2,10|";
map15 += "1,1,3,15|1,2,3,15|1,3,2,3|1,4,3,15|1,5,3,15|1,6,1,15|1,7,2,3|1,8,1,15|1,9,1,15|1,10,1,15|";
map15 += "2,1,3,15|2,2,3,15|2,3,1,15|2,4,1,15|2,5,3,15|2,6,1,15|2,7,1,15|2,10,1,15|2,11,1,15|2,12,1,3|";
map15 += "3,1,1,15|3,2,3,15|3,3,3,15|3,4,3,15|3,5,1,15|3,6,1,15|3,7,1,15|3,8,1,15|3,10,1,5|";
map15 += "4,0,1,15|4,1,1,15|4,2,3,15|4,3,1,15|4,4,3,15|4,5,2,12|4,6,1,15|4,9,1,10|4,10,1,10|4,11,3,15|";
map15 += "5,0,1,15|5,2,3,15|5,3,1,15|5,4,3,15|5,5,3,15|5,6,1,15|5,8,2,12|5,9,1,15|5,10,1,3|";
map15 += "6,2,3,15|6,3,1,15|6,4,2,3|6,5,3,15|6,6,3,15|6,8,1,12|6,9,1,3|6,10,3,15|";
map15 += "7,2,3,15|7,3,3,15|7,4,3,15|7,5,3,15|7,6,3,15|7,7,1,15|7,8,1,3|7,9,3,15|7,10,3,15|";
map15 += "8,0,1,15|8,1,1,15|8,2,1,15|8,3,3,15|8,4,3,15|8,5,3,15|8,6,1,15|8,7,1,3|8,8,3,15|8,9,3,15|8,10,1,12|8,11,1,15|";
map15 += "9,2,1,15|9,3,3,15|9,4,1,15|9,5,1,15|9,6,1,15|9,8,3,15|9,9,1,15|9,10,3,15|9,11,3,15|9,12,3,15|";
map15 += "10,3,3,15|10,4,2,5|10,6,1,5|10,8,1,15|10,10,1,15|10,11,1,3|10,12,3,3|";
map15 += "11,3,1,15|11,4,1,15|11,5,1,15|11,6,3,15|11,8,1,5|11,10,3,15|11,11,3,15|11,12,3,15|";
map15 += "12,3,2,15|12,6,3,15|12,7,3,15|12,8,3,15|12,9,3,15|12,10,3,15|";

var map16 = "";
map16 += "0,9,1,15|0,10,1,15|0,11,2,15|0,12,2,15|";
map16 += "1,3,3,15|1,4,3,15|1,5,3,15|1,6,3,15|1,10,1,15|1,11,1,15|1,12,2,15|";
map16 += "2,1,2,15|2,4,3,15|2,7,3,15|2,11,1,15|2,12,1,15|";
map16 += "3,1,3,15|3,2,3,15|3,5,3,15|3,8,3,15|";
map16 += "4,1,2,15|4,6,3,15|";
map16 += "5,2,3,15|5,4,3,15|5,5,3,15|";
map16 += "6,2,2,12|6,3,3,15|6,8,3,15|6,9,3,15|";
map16 += "7,3,1,12|7,4,3,15|7,7,3,15|7,10,3,15|";
map16 += "8,4,2,12|8,5,3,15|8,6,3,15|8,7,3,15|8,11,3,15|8,12,3,15|";
map16 += "9,5,1,12|9,6,3,15|9,7,3,15|9,8,3,15|9,9,3,15|9,10,3,15|";
map16 += "10,6,2,12|10,7,3,15|10,8,3,15|10,9,3,15|10,10,3,15|10,11,3,15|";
map16 += "11,7,1,12|11,8,3,15|11,9,3,15|11,10,3,15|11,11,3,15|11,12,3,15|";
map16 += "12,9,2,15|12,10,3,15|12,11,3,15|12,12,3,15|";

var map17 = "";
map17 += "0,3,4,15|0,4,4,15|0,6,1,15|0,9,4,15|0,10,4,15|0,11,1,15|0,12,1,15|";
map17 += "1,1,1,15|1,2,1,15|1,3,4,15|1,4,4,15|1,6,1,15|1,8,1,15|1,9,4,15|1,10,4,15|1,11,4,15|1,12,1,15|";
map17 += "2,3,4,15|2,4,4,15|2,6,4,15|2,5,2,10|2,6,1,15|2,8,1,15|2,9,4,15|2,10,4,15|2,11,4,15|2,12,2,5|";
map17 += "3,1,1,15|3,3,2,5|3,4,4,15|3,5,4,15|3,6,1,15|3,7,1,15|3,8,1,15|3,9,1,15|3,10,4,15|3,11,4,15|";
map17 += "4,0,1,12|4,1,1,15|4,2,1,15|4,3,1,15|4,4,4,15|4,5,4,15|4,6,4,15|4,7,1,15|4,9,4,15|4,10,4,15|4,11,4,15|";
map17 += "5,4,4,15|5,5,4,15|5,6,4,15|5,7,4,15|5,8,4,15|5,10,2,3|";
map17 += "6,2,2,15|6,4,1,15|6,5,4,15|6,6,4,15|6,7,4,15|6,8,4,15|";
map17 += "7,1,4,15|7,2,4,15|7,3,1,15|7,4,1,15|7,5,1,15|7,6,4,15|7,7,4,15|7,8,4,15|7,10,2,3|";
map17 += "8,1,4,15|8,2,4,15|8,3,4,15|8,4,1,10|8,5,1,10|8,6,4,15|8,7,4,15|8,8,1,15|";
map17 += "9,1,4,15|9,2,4,15|9,3,4,15|9,4,1,5|9,5,1,5|9,6,4,15|9,8,2,5|9,8,1,15|9,9,1,15|9,11,1,15|9,12,1,15|";
map17 += "10,0,1,12|10,1,1,15|10,2,4,15|10,3,4,15|10,6,4,15|10,10,1,12|";
map17 += "11,1,1,15|11,2,4,15|11,3,4,15|11,5,2,3|11,6,1,15|11,8,1,15|11,9,1,15|11,10,1,15|11,12,1,15|";
map17 += "12,5,2,3|12,6,1,15|";

var map18 = "";
map18 += "0,2,1,15|0,8,2,15|0,9,2,15|0,10,2,15|0,11,3,15|";
map18 += "1,1,1,15|1,2,3,15|1,3,1,15|1,8,2,15|1,11,2,15|";
map18 += "2,2,1,15|2,3,3,15|2,4,1,15|2,6,1,15|2,7,1,15|2,8,2,15|2,9,1,15|2,11,2,15|";
map18 += "3,3,1,15|3,6,1,15|3,8,3,15|3,9,1,15|3,10,2,15|3,11,2,15|";
map18 += "4,4,3,15|4,5,2,15|4,6,2,15|4,7,3,15|4,9,1,15|";
map18 += "5,4,2,15|5,6,1,15|5,7,1,15|5,8,1,15|5,9,1,15|";
map18 += "6,2,1,15|6,3,1,15|6,4,1,15|6,5,1,15|6,7,2,15|";
map18 += "7,2,1,15|7,4,3,15|7,5,2,15|7,6,2,15|7,7,3,15|";
map18 += "8,0,2,15|8,1,2,15|8,2,1,15|8,3,3,15|8,5,1,15|8,8,1,15|8,9,1,15|";
map18 += "9,0,2,15|9,2,1,15|9,3,1,15|9,4,1,15|9,5,1,15|9,8,1,15|9,9,2,15|9,10,2,15|";
map18 += "10,0,2,15|10,3,2,15|10,9,2,15|10,10,1,15|10,11,1,15|";
map18 += "11,0,3,15|11,1,2,15|11,2,2,15|11,3,2,15|11,10,1,15|11,11,2,15|11,12,2,15|";
map18 += "12,11,2,15|12,12,2,15|";

var map19 = "";
map19 += "0,3,1,12|0,4,1,15|0,5,2,3|0,6,3,15|0,7,3,15|0,8,3,15|0,9,1,12|";
map19 += "1,0,1,15|1,1,1,15|1,2,2,3|1,6,3,15|1,7,3,15|1,8,3,15|1,10,1,15|1,11,1,15|1,12,1,3|";
map19 += "2,3,1,12|2,4,1,15|2,5,2,3|2,7,3,15|2,8,3,15|2,9,1,12|";
map19 += "3,0,1,15|3,1,1,15|3,2,2,3|3,4,1,3|3,7,3,15|3,8,3,15|3,10,1,15|3,11,1,15|3,12,1,3|";
map19 += "4,3,1,15|4,4,1,15|4,5,2,15|4,6,1,15|4,7,1,15|4,8,3,15|4,9,1,15|";
map19 += "5,0,1,15|5,1,1,15|5,2,2,3|5,7,1,3|5,8,3,15|5,9,3,15|";
map19 += "6,4,1,15|6,5,2,3|6,6,3,15|6,7,3,15|6,8,3,15|6,9,3,15|6,10,3,15|";
map19 += "7,0,1,15|7,1,1,15|7,2,2,3|7,7,1,3|7,8,3,15|7,9,3,15|";
map19 += "8,3,1,15|8,4,1,15|8,5,2,15|8,6,1,15|8,7,1,15|8,8,3,15|8,9,1,15|";
map19 += "9,0,1,15|9,1,1,15|9,2,2,3|9,4,1,3|9,7,3,15|9,8,3,15|9,10,1,15|9,11,1,15|9,12,1,3|";
map19 += "10,3,1,12|10,4,1,15|10,5,2,3|10,7,3,15|10,8,3,15|10,9,1,12|";
map19 += "11,0,1,15|11,1,1,15|11,2,2,3|11,6,3,15|11,7,3,15|11,8,3,15|11,10,1,15|11,11,1,15|11,12,1,3|";
map19 += "12,3,1,12|12,4,1,15|12,5,2,3|12,6,3,15|12,7,3,15|12,8,3,15|12,9,1,12|";

var map20 = "";
map20 += "0,3,2,3|0,5,1,15|0,7,1,15|0,8,1,3|";
map20 += "1,7,1,15|1,9,2,12|1,10,1,15|1,11,1,15|";
map20 += "2,3,1,15|2,4,1,15|2,5,1,15|2,7,1,10|2,8,1,10|";
map20 += "3,0,5,15|3,2,5,15|3,3,5,15|3,4,5,15|3,5,5,15|3,6,1,12|3,7,1,15|3,10,2,12|3,11,1,15|";
map20 += "4,5,5,15|";
map20 += "5,0,1,15|5,2,1,12|5,3,2,15|5,7,2,15|5,8,1,15|5,9,1,15|5,10,1,3|";
map20 += "6,2,2,15|6,5,5,15|6,7,3,15|6,8,3,15|6,10,1,3|";
map20 += "7,3,1,12|7,4,1,15|7,5,5,15|7,6,3,15|7,7,3,15|7,8,3,15|7,9,3,15|7,10,1,3|";
map20 += "8,0,1,15|8,1,1,15|8,2,1,15|8,3,1,3|8,5,5,15|8,7,3,15|8,8,3,15|";
map20 += "9,5,5,15|9,6,5,15|9,7,5,15|9,8,5,15|9,9,5,15|9,11,5,15|9,12,5,15|";
map20 += "10,0,1,15|10,1,2,15|10,2,1,15|10,3,1,15|10,10,3,15|10,11,3,15|";
map20 += "11,6,2,3|11,7,1,12|11,7,1,12|11,8,1,15|11,9,3,15|11,10,3,15|11,11,3,15|11,12,3,15|";
map20 += "12,5,1,15|12,6,2,3|12,7,1,12|12,10,3,15|12,11,3,15|";


var map21 = "";
map21 += "0,3,3,15|0,4,3,15|0,5,3,15|0,6,3,15|0,7,3,15|0,8,1,15|0,10,2,15|";
map21 += "1,1,1,12|1,2,3,15|1,3,3,15|1,7,3,15|1,8,3,15|1,9,1,15|1,11,2,15|";
map21 += "2,1,1,15|2,2,3,15|2,4,2,15|2,5,2,15|2,7,3,15|2,8,3,15|2,9,1,15|2,10,1,15|2,11,1,15|";
map21 += "3,0,1,12|3,1,1,12|3,1,1,15|3,2,3,15|3,6,3,15|3,7,3,15|3,8,1,15|3,9,1,15|3,10,2,15|3,11,1,3|";
map21 += "4,0,1,12|4,1,1,15|4,2,3,15|4,7,3,15|4,8,1,15|4,9,1,15|4,10,1,15|4,11,2,15|";
map21 += "5,0,1,12|5,1,1,15|5,2,3,15|5,4,2,15|5,5,2,15|5,7,3,15|5,8,3,15|5,9,1,15|5,10,1,15|";
map21 += "6,1,1,15|6,2,3,15|6,7,3,15|6,8,3,15|6,9,1,15|6,10,1,15|";
map21 += "7,1,1,15|7,2,3,15|7,7,3,15|7,8,3,15|7,9,1,15|7,10,1,15|";
map21 += "8,0,1,12|8,1,1,12|8,1,1,15|8,2,3,15|8,3,3,15|8,6,3,15|8,7,3,15|8,8,1,15|8,9,1,15|8,10,1,15|8,11,1,15|";
map21 += "9,1,1,15|9,2,1,15|9,3,3,15|9,4,3,15|9,5,3,15|9,6,3,15|9,7,3,15|9,8,1,15|9,9,1,15|9,10,1,15|9,11,1,15|";
map21 += "10,2,1,15|10,3,1,15|10,4,3,15|10,5,3,15|10,6,1,15|10,7,1,15|10,8,1,15|10,9,1,15|10,10,1,5|10,11,2,15|";
map21 += "11,3,1,15|11,4,3,15|11,5,3,15|11,6,1,15|11,7,1,15|11,8,1,15|11,11,2,15|";
map21 += "12,6,1,5|12,7,1,5|12,9,2,15|12,10,2,15|12,11,2,15|";

var map22 = "";
map22 += "0,5,3,15|0,6,1,15|0,7,2,15|0,8,1,15|0,9,3,15|0,12,3,15|";
map22 += "1,3,3,15|1,6,3,15|1,7,1,15|1,8,3,15|1,11,3,15|1,12,2,15|";
map22 += "2,2,3,15|2,3,1,15|2,4,3,15|2,7,3,15|2,12,3,15|";
map22 += "3,3,3,15|3,4,1,15|3,5,3,15|3,9,3,15|3,10,3,15|";
map22 += "4,1,3,15|4,4,3,15|4,8,3,15|4,9,1,15|4,10,1,15|4,11,3,15|";
map22 += "5,0,3,15|5,1,2,15|5,2,3,15|5,6,3,15|5,9,3,15|5,10,3,15|";
map22 += "6,1,3,15|6,5,3,15|6,6,2,15|6,7,3,15|";
map22 += "7,3,3,15|7,6,3,15|7,9,3,15|";
map22 += "8,2,3,15|8,3,1,15|8,4,3,15|8,8,3,15|8,9,1,15|8,10,3,15|";
map22 += "9,2,3,15|9,3,1,15|9,4,3,15|9,7,3,15|9,9,3,15|9,12,3,15|";
map22 += "10,3,3,15|10,6,3,15|10,7,2,15|10,8,3,15|10,11,3,15|10,12,1,15|";
map22 += "11,5,3,15|11,7,3,15|11,10,3,15|11,11,2,15|11,12,3,15|";
map22 += "12,4,3,15|12,5,2,15|12,6,3,15|12,11,3,15|";

var map23 = "";
map23 += "0,5,3,15|0,6,2,15|0,7,3,15|";
map23 += "1,3,2,15|1,6,3,15|";
map23 += "2,3,2,15|2,12,2,15|";
map23 += "3,3,3,15|3,4,2,15|3,9,2,15|";
map23 += "4,3,3,15|4,4,3,15|4,5,2,15|4,7,2,12|4,8,2,15|";
map23 += "5,1,2,15|5,3,1,15|5,4,3,15|5,5,3,15|5,6,3,15|5,7,2,3|";
map23 += "6,1,2,15|6,2,2,15|6,3,2,15|6,4,2,15|6,5,3,15|6,6,3,15|6,7,3,15|6,8,2,12|6,9,2,15|";
map23 += "7,3,1,15|7,4,3,15|7,5,3,15|7,6,3,15|7,7,2,3|";
map23 += "8,3,3,15|8,4,3,15|8,5,2,15|8,7,2,12|8,8,2,15|";
map23 += "9,3,3,15|9,4,2,15|9,9,2,15|";
map23 += "10,3,2,15|10,12,2,15|";
map23 += "11,3,2,15|11,6,3,15|";
map23 += "12,5,3,15|12,6,2,15|12,7,3,15|";

var map24 = "";
map24 += "0,3,3,15|0,5,1,15|0,6,1,10|0,7,1,10|0,9,1,15|0,10,1,10|0,11,1,10|";
map24 += "1,2,3,15|1,3,3,15|1,5,2,3|";
map24 += "2,0,2,15|2,1,1,15|2,2,3,15|2,3,3,15|2,4,3,15|2,6,1,12|2,7,1,3|2,8,2,15|2,9,1,15|2,10,1,15|2,11,1,15|2,12,1,3|";
map24 += "3,3,3,15|3,4,3,15|3,5,1,12|3,6,1,15|";
map24 += "4,0,1,15|4,1,1,15|4,2,1,15|4,3,3,15|4,4,1,12|4,5,1,3|4,6,4,15|4,7,4,15|4,8,4,15|4,9,4,15|4,10,4,15|";
map24 += "5,0,2,3|5,1,3,15|5,2,3,15|5,3,3,15|5,4,1,12|5,5,1,3|5,6,4,15|5,7,4,15|5,8,4,15|5,9,4,15|5,10,4,15|";
map24 += "6,2,1,10|6,3,1,15|6,4,2,3|6,6,4,15|6,7,4,15|6,8,4,15|6,9,4,15|6,10,4,15|";
map24 += "7,1,1,3|7,2,1,5|7,3,1,15|7,4,1,15|7,6,4,15|7,7,4,15|7,8,4,15|7,9,4,15|7,10,4,15|";
map24 += "8,1,1,15|8,3,1,15|8,6,4,15|8,7,4,15|8,8,4,15|8,9,4,15|8,10,4,15|8,11,4,15|";
map24 += "9,1,1,15|9,4,1,10|9,5,1,15|9,6,4,15|9,7,4,15|9,8,4,15|9,9,4,15|9,10,4,15|9,11,4,15|9,12,4,15|";
map24 += "10,0,1,10|10,1,1,15|10,3,1,10|10,4,1,15|10,5,1,3|10,6,4,15|10,7,4,15|10,8,4,15|10,9,4,15|10,10,4,15|10,11,4,15|10,12,4,15|";
map24 += "11,2,2,15|11,3,1,15|11,4,1,3|11,6,4,15|11,7,4,15|11,8,4,15|11,9,4,15|11,10,4,15|11,11,4,15|11,12,4,15|";
map24 += "12,2,2,15|12,4,1,10|12,5,1,10|12,6,4,15|12,7,4,15|12,8,4,15|12,9,4,15|12,10,4,15|12,11,4,15|12,12,4,15|";

var map25 = "";
map25 += "0,6,2,15|0,11,1,15|0,12,1,15|";
map25 += "1,1,1,15|1,2,1,15|1,3,1,15|1,8,2,15|1,9,1,15|";
map25 += "2,5,2,15|2,6,2,15|2,7,1,15|2,8,1,15|2,11,1,15|2,12,1,15|";
map25 += "3,0,2,15|3,1,1,15|3,2,1,15|3,7,1,15|3,8,1,15|3,10,1,15|3,11,1,15|";
map25 += "4,4,1,15|4,5,1,15|";
map25 += "5,0,1,15|5,3,1,15|5,4,1,15|5,6,1,15|5,7,1,15|5,8,1,15|5,9,1,15|5,10,1,15|";
map25 += "6,2,2,15|6,8,1,15|6,9,2,15|6,10,1,15|";
map25 += "7,0,1,15|7,3,2,15|7,4,1,15|7,5,1,15|7,6,2,15|7,10,2,15|";
map25 += "8,3,1,15|8,4,1,15|8,5,1,15|8,8,1,15|";
map25 += "9,0,1,15|9,1,2,15|9,2,2,15|9,7,1,15|9,8,1,15|9,10,2,15|9,11,1,15|9,12,1,15|";
map25 += "10,4,2,15|10,5,1,15|10,6,2,15|10,7,2,15|10,11,2,15|10,12,1,15|";
map25 += "11,0,2,15|11,2,2,15|11,5,1,15|11,6,1,15|11,9,1,15|11,12,1,15|";
map25 += "12,2,2,15|12,3,2,15|12,8,1,15|12,9,1,15|12,10,1,15|";

var map26 = "";
map26 += "0,1,2,12|0,2,3,15|0,3,3,15|0,4,3,15|0,5,3,15|0,6,3,15|0,11,2,15|0,12,2,15|";
map26 += "1,2,2,12|1,3,3,15|1,4,3,15|1,5,3,15|1,6,2,3|1,9,5,15|1,12,2,15|";
map26 += "2,0,5,15|2,4,3,15|2,5,2,3|2,8,5,15|2,9,5,15|";
map26 += "3,0,5,15|3,1,5,15|3,3,2,3|3,5,2,12|3,8,3,15|";
map26 += "4,1,3,15|4,3,1,12|4,6,1,3|4,8,2,10|4,9,1,10|";
map26 += "5,3,1,10|5,4,2,15|5,5,1,10|5,6,2,15|5,7,1,5|";
map26 += "6,1,1,5|6,2,2,5|6,4,1,12|6,7,1,3|6,9,2,10|6,10,1,10|";
map26 += "7,4,1,10|7,5,2,15|7,6,1,10|7,7,2,15|7,8,1,5|";
map26 += "8,2,1,5|8,3,2,5|8,5,1,12|8,8,1,3|8,10,3,15|";
map26 += "9,3,3,15|9,6,2,3|9,8,2,12|9,10,5,15|9,11,5,15|";
map26 += "10,2,5,15|10,3,5,15|10,7,3,15|10,8,2,3|10,11,5,15|";
map26 += "11,2,5,15|11,5,2,12|11,6,3,15|11,7,3,15|11,8,3,15|";
map26 += "12,4,2,12|12,5,3,15|12,6,3,15|12,7,3,15|12,8,3,15|12,9,3,15|12,10,2,3|12,12,2,15|";

var map27 = "";
map27 += "0,1,2,15|0,5,3,15|0,9,3,15|";
map27 += "1,1,2,15|1,2,2,15|1,3,2,15|1,4,1,15|1,5,2,15|1,9,2,15|";
map27 += "2,5,2,15|2,6,2,15|2,7,2,15|2,8,1,15|2,9,2,15|";
map27 += "3,6,3,15|3,9,2,15|3,10,1,15|3,11,2,15|3,12,2,15|";
map27 += "4,0,2,15|4,1,2,15|4,2,2,15|4,3,2,15|4,5,2,15|4,6,2,15|4,9,3,15|";
map27 += "5,3,2,15|5,5,1,15|5,6,3,15|5,7,3,15|5,8,2,15|5,9,3,15|";
map27 += "6,3,2,15|6,4,2,15|6,5,2,15|6,9,1,15|";
map27 += "7,1,2,15|7,5,1,15|7,9,2,15|";
map27 += "8,1,2,15|8,2,1,15|8,3,3,15|8,4,2,15|8,5,1,15|8,6,1,15|8,7,2,15|8,8,2,15|8,9,2,15|8,10,3,15|";
map27 += "9,4,2,15|9,8,2,15|9,10,3,15|9,11,3,15|9,12,2,15|";
map27 += "10,2,2,15|10,3,2,15|10,4,2,15|10,8,1,15|10,9,1,15|";
map27 += "11,2,2,15|11,6,2,15|11,7,2,15|11,8,2,15|11,9,2,15|11,10,1,15|11,11,1,15|11,12,1,15|";
map27 += "12,2,3,15|12,6,2,15|";

var map28 = "";
map28 += "0,7,2,12|0,8,3,15|";
map28 += "1,6,1,12|1,7,3,15|1,8,3,15|1,9,3,15|1,10,3,15|1,11,3,15|1,12,3,15|";
map28 += "2,5,2,12|2,6,3,15|2,7,3,15|2,8,4,15|2,9,4,15|2,10,4,15|2,11,4,15|2,12,4,15|";
map28 += "3,4,1,12|3,5,3,15|3,6,3,15|3,7,4,15|3,8,4,15|3,9,4,15|3,10,4,15|3,11,4,15|3,12,4,15|";
map28 += "4,3,2,12|4,4,3,15|4,5,3,15|4,6,4,15|4,7,4,15|4,8,4,15|4,9,4,15|4,10,4,15|4,11,4,15|";
map28 += "5,2,1,12|5,3,3,15|5,4,3,15|5,5,4,15|5,6,4,15|5,7,4,15|5,8,4,15|5,9,4,15|5,10,4,15|";
map28 += "6,1,2,12|6,2,3,15|6,3,3,15|6,4,4,15|6,5,4,15|6,6,4,15|6,7,4,15|6,8,4,15|6,9,4,15|6,10,4,15|";
map28 += "7,2,1,12|7,3,3,15|7,4,3,15|7,5,4,15|7,6,4,15|7,7,4,15|7,8,4,15|7,9,4,15|7,10,4,15|";
map28 += "8,3,2,12|8,4,3,15|8,5,3,15|8,6,4,15|8,7,4,15|8,8,4,15|8,9,4,15|8,10,4,15|8,11,4,15|";
map28 += "9,2,1,15|9,3,1,15|9,4,1,15|9,4,1,12|9,5,3,15|9,6,3,15|9,7,4,15|9,8,4,15|9,9,4,15|9,10,4,15|9,11,4,15|9,12,4,15|";
map28 += "10,0,2,10|10,1,2,15|10,2,1,5|10,3,1,5|10,4,1,5|10,5,1,5|10,5,1,5|10,6,3,15|10,7,3,15|10,8,4,15|10,9,4,15|10,10,4,15|10,11,4,15|10,12,4,15|";
map28 += "11,0,2,5|11,6,1,12|11,7,3,15|11,8,3,15|11,9,3,15|11,10,3,15|11,11,3,15|11,12,3,15|";
map28 += "12,7,2,12|12,8,3,15|";

var map29 = "";
map29 += "0,5,3,15|0,6,3,15|0,8,2,15|0,12,1,15|";
map29 += "1,1,1,15|1,4,2,15|1,5,3,15|1,6,3,15|1,7,1,15|";
map29 += "2,1,5,15|2,2,5,15|2,5,1,15|2,6,3,15|2,7,5,15|2,8,5,15|2,11,1,15|";
map29 += "3,1,5,15|3,2,5,15|3,7,5,15|3,8,5,15|3,10,2,15|";
map29 += "4,2,1,15|4,4,5,15|4,5,5,15|4,8,3,15|4,9,3,15|4,10,3,15|4,11,1,15|";
map29 += "5,1,2,15|5,2,3,15|5,3,3,15|5,4,5,15|5,5,5,15|5,7,1,15|5,8,3,15|";
map29 += "6,2,3,15|6,3,3,15|6,5,2,15|6,8,5,15|6,9,5,15|";
map29 += "7,1,1,15|7,2,3,15|7,3,3,15|7,4,3,15|7,8,5,15|7,9,5,15|";
map29 += "8,2,5,15|8,3,5,15|8,8,3,15|8,9,3,15|8,10,3,15|";
map29 += "9,2,5,15|9,3,5,15|9,6,2,15|9,8,3,15|9,9,3,15|9,10,3,15|9,12,1,15|";
map29 += "10,0,1,15|10,3,1,15|10,9,5,15|10,10,5,15|10,12,2,15|";
map29 += "11,2,2,15|11,5,1,15|11,8,1,15|11,9,5,15|11,10,5,15|";
map29 += "12,6,2,15|";

var map30 = "";
map30 += "0,3,1,12|0,4,3,15|0,5,2,15|0,6,3,15|0,7,3,15|0,8,3,15|0,9,3,15|0,10,2,3|";
map30 += "1,2,2,12|1,3,3,15|1,4,3,15|1,5,3,15|1,6,3,15|1,7,3,15|1,8,3,15|1,9,3,15|1,10,3,15|1,11,2,3|";
map30 += "2,2,2,12|2,3,3,15|2,4,3,15|2,5,5,15|2,6,5,15|2,7,3,15|2,8,3,15|2,9,3,15|2,10,3,15|2,11,1,3|";
map30 += "3,3,1,12|3,4,3,15|3,5,3,15|3,6,5,15|3,7,3,15|3,8,3,15|3,9,3,15|3,10,3,15|3,11,1,3|";
map30 += "4,2,1,12|4,3,3,15|4,4,3,15|4,5,3,15|4,6,5,15|4,7,5,15|4,8,3,15|4,9,3,15|4,10,1,3|";
map30 += "5,1,1,12|5,2,3,15|5,3,3,15|5,4,3,15|5,5,3,15|5,6,3,15|5,7,3,15|5,8,3,15|5,9,1,3|";
map30 += "6,1,1,12|6,2,3,15|6,3,3,15|6,4,3,15|6,5,3,15|6,6,3,15|6,7,2,15|6,8,3,15|6,9,1,3|";
map30 += "7,2,2,12|7,3,3,15|7,4,3,15|7,5,3,15|7,6,3,15|7,7,3,15|7,8,3,15|7,9,3,15|7,10,1,3|";
map30 += "8,3,1,12|8,4,3,15|8,5,5,15|8,6,5,15|8,7,3,15|8,8,3,15|8,9,3,15|8,10,3,15|8,11,1,3|";
map30 += "9,2,1,12|9,3,3,15|9,4,3,15|9,5,3,15|9,6,5,15|9,7,3,15|9,8,3,15|9,9,3,15|9,10,3,15|9,11,1,3|";
map30 += "10,1,2,12|10,2,3,15|10,3,3,15|10,4,3,15|10,5,3,15|10,6,5,15|10,7,5,15|10,8,3,15|10,9,3,15|10,10,3,15|10,11,1,3|";
map30 += "11,2,1,12|11,3,3,15|11,4,3,15|11,5,3,15|11,6,3,15|11,7,3,15|11,8,3,15|11,9,3,15|11,10,2,3|";
map30 += "12,3,1,12|12,4,3,15|12,5,3,15|12,6,2,15|12,7,3,15|12,8,3,15|12,9,2,3|";

var map31 = "";
map31 += "0,1,5,15|0,2,3,15|0,3,3,15|0,4,3,15|0,5,5,15|0,8,1,15|0,9,5,15|";
map31 += "1,1,5,15|1,2,3,15|1,3,5,15|1,4,3,15|1,5,5,15|1,7,5,15|1,9,5,15|1,11,5,15|1,12,5,15|";
map31 += "2,2,1,15|2,3,5,15|2,6,1,15|2,7,5,15|2,10,1,15|2,11,5,15|";
map31 += "3,0,5,15|3,1,5,15|3,3,5,15|3,4,5,15|3,5,5,15|3,6,3,15|3,7,3,15|3,8,1,15|3,9,5,15|3,11,5,15|";
map31 += "4,3,5,15|4,6,1,15|4,7,5,15|4,9,5,15|4,10,3,15|4,11,3,15|";
map31 += "5,1,5,15|5,2,1,15|5,5,5,15|5,7,5,15|5,10,3,15|";
map31 += "6,1,5,15|6,3,2,15|6,4,5,15|6,5,5,15|6,6,1,15|6,7,5,15|6,8,5,15|6,9,5,15|";
map31 += "7,1,5,15|7,6,3,15|7,7,5,15|7,9,1,15|";
map31 += "8,0,5,15|8,1,5,15|8,2,5,15|8,4,5,15|8,8,3,15|8,9,5,15|8,10,3,15|";
map31 += "9,3,1,15|9,4,5,15|9,5,5,15|9,6,5,15|9,7,3,15|9,8,3,15|9,9,5,15|9,10,5,15|9,11,5,15|";
map31 += "10,1,5,15|10,2,5,15|10,3,3,15|10,4,5,15|10,7,1,15|10,8,5,15|10,9,5,15|";
map31 += "11,1,5,15|11,2,3,15|11,3,3,15|11,4,5,15|11,11,5,15|";
map31 += "12,1,5,15|12,2,5,15|12,3,3,15|12,4,3,15|12,6,5,15|12,7,5,15|12,8,5,15|12,10,5,15|12,11,5,15|";

var map32 = "";
map32 += "0,0,4,15|0,1,4,15|0,2,4,15|0,3,4,15|0,4,4,15|0,5,4,15|0,6,2,15|0,7,4,15|0,8,4,15|0,9,4,15|0,10,4,15|";
map32 += "1,0,4,15|1,1,4,15|1,2,4,15|1,3,1,15|1,4,1,3|1,5,4,15|1,6,4,15|1,7,4,15|1,8,4,15|1,9,4,15|1,10,1,15|1,11,1,15|1,12,1,3|";
map32 += "2,0,4,15|2,1,4,15|2,2,4,15|2,4,1,3|2,5,4,15|2,6,4,15|2,7,4,15|2,8,4,15|2,9,4,15|2,10,4,15|2,11,1,12|";
map32 += "3,0,4,15|3,1,4,15|3,2,1,15|3,3,1,15|3,4,1,15|3,5,1,15|3,6,4,15|3,7,4,15|3,8,4,15|3,9,1,15|3,10,1,15|3,11,1,15|";
map32 += "4,0,4,15|4,1,4,15|4,2,4,15|4,5,1,12|";
map32 += "5,0,4,15|5,1,4,15|5,2,4,15|5,3,1,15|5,5,1,15|5,6,2,3|5,7,1,12|5,8,1,15|5,10,2,3|";
map32 += "6,1,4,15|6,2,4,15|6,3,4,15|6,5,1,15|6,9,1,12|6,10,2,3|";
map32 += "7,0,4,15|7,1,4,15|7,2,4,15|7,3,1,15|7,5,1,15|7,6,2,3|7,7,1,12|7,8,1,15|7,10,2,3|";
map32 += "8,0,4,15|8,1,4,15|8,2,4,15|8,5,1,12|";
map32 += "9,0,4,15|9,1,4,15|9,2,1,15|9,3,1,15|9,4,1,15|9,5,1,15|9,6,4,15|9,7,4,15|9,8,4,15|9,9,1,15|9,10,1,15|9,11,1,15|";
map32 += "10,0,4,15|10,1,4,15|10,2,4,15|10,4,1,3|10,5,4,15|10,6,4,15|10,7,4,15|10,8,4,15|10,9,4,15|10,10,4,15|10,11,1,12|";
map32 += "11,0,4,15|11,1,4,15|11,2,4,15|11,3,1,15|11,4,1,3|11,5,4,15|11,6,4,15|11,7,4,15|11,8,4,15|11,9,4,15|11,10,1,15|11,11,1,15|11,12,1,3|";
map32 += "12,0,4,15|12,1,4,15|12,2,4,15|12,3,4,15|12,4,4,15|12,5,4,15|12,6,2,15|12,7,4,15|12,8,4,15|12,9,4,15|12,10,4,15|";

var map33 = "";
map33 += "0,9,3,15|0,12,2,5|";
map33 += "1,1,2,15|1,4,2,5|1,5,2,3|1,7,2,12|1,8,3,15|1,9,3,15|";
map33 += "2,2,2,15|2,5,2,5|2,6,3,15|2,7,2,5|2,8,3,15|2,9,3,15|2,10,2,15|2,12,2,12|";
map33 += "3,3,2,15|3,5,3,15|3,6,3,15|3,7,3,15|3,8,3,15|3,9,2,15|";
map33 += "4,0,2,15|4,4,2,15|4,6,3,15|4,8,2,15|";
map33 += "5,1,2,15|5,3,3,15|5,4,3,15|5,5,2,15|5,6,3,15|5,7,2,15|";
map33 += "6,3,3,15|6,4,3,15|6,5,3,15|6,6,3,15|6,7,3,15|6,8,2,15|";
map33 += "7,2,2,15|7,3,3,15|7,4,2,15|7,5,3,15|";
map33 += "8,1,2,15|8,2,3,15|8,3,3,15|8,4,3,15|8,5,2,15|8,8,2,12|8,9,2,10|";
map33 += "9,0,2,15|9,1,3,15|9,2,2,12|9,3,3,15|9,6,2,15|9,11,2,12|";
map33 += "10,1,3,15|10,2,2,5|10,7,2,15|10,11,2,5|";
map33 += "11,3,2,10|11,4,2,15|11,5,2,10|11,8,2,15|11,10,2,10|";
map33 += "12,10,2,15|";

var map34 = "";
map34 += "0,1,1,5|0,2,1,5|0,3,1,10|";
map34 += "1,1,1,5|1,2,1,5|1,3,1,10|1,4,1,5|1,5,1,5|1,6,1,5|1,7,1,10|1,8,1,10|1,9,1,10|";
map34 += "2,1,1,5|2,2,1,5|2,5,1,10|2,8,1,3|2,10,1,5|2,11,1,5|2,12,1,5|";
map34 += "3,1,1,10|3,2,1,15|3,3,1,15|3,4,1,15|3,8,1,3|3,11,1,10|3,12,1,10|";
map34 += "4,0,1,5|4,2,1,15|4,3,1,5|4,4,1,10|4,6,1,10|4,7,1,5|4,9,1,10|4,10,1,15|4,11,1,5|";
map34 += "5,0,1,10|5,1,1,5|5,4,1,5|5,6,1,15|5,7,1,15|5,8,1,15|5,9,1,5|5,10,1,10|";
map34 += "6,5,1,5|6,6,1,15|6,7,1,15|6,8,1,15|6,9,1,15|6,10,1,5|";
map34 += "7,3,1,10|7,4,1,5|7,5,1,15|7,6,1,5|7,7,1,5|7,8,1,15|7,9,1,10|7,10,1,15|";
map34 += "8,1,1,5|8,2,1,5|8,3,1,5|8,4,1,15|8,5,1,10|8,9,1,5|8,10,1,15|8,11,1,15|";
map34 += "9,1,1,5|9,2,1,15|9,3,1,15|9,4,1,15|9,5,1,10|9,6,1,5|9,7,1,5|9,8,1,5|9,9,1,5|9,11,1,5|9,12,1,15|";
map34 += "10,2,1,5|10,3,1,15|10,4,1,15|10,5,1,15|10,6,1,15|10,7,1,15|10,8,1,5|10,9,1,15|10,12,1,15|";
map34 += "11,8,1,3|11,9,1,10|11,10,1,10|11,11,1,5|";
map34 += "12,8,1,15|12,9,1,10|";

var map35 = "";
map35 += "0,2,3,15|0,3,1,15|0,4,1,15|0,5,5,15|0,6,5,15|0,7,1,15|0,8,1,15|0,9,5,15|";
map35 += "1,3,3,15|1,4,1,15|1,5,5,15|1,6,1,15|1,7,1,15|1,8,1,15|1,9,5,15|1,10,3,15|";
map35 += "2,3,3,15|2,4,1,15|2,5,5,15|2,6,1,15|2,7,1,15|2,8,5,15|2,9,5,15|2,10,3,15|";
map35 += "3,2,3,15|3,3,1,15|3,4,1,15|3,4,1,15|3,5,1,15|3,6,1,15|3,7,5,15|3,8,5,15|3,9,3,15|";
map35 += "4,1,1,15|4,2,1,15|4,3,1,15|4,4,2,15|4,5,1,15|4,6,1,15|4,7,1,15|4,8,5,15|4,9,3,15|";
map35 += "5,2,3,15|5,3,1,15|5,4,1,15|5,5,1,15|5,6,1,15|5,7,1,15|5,8,1,15|5,9,3,15|";
map35 += "6,1,1,15|6,2,1,15|6,3,1,15|6,4,2,15|6,5,1,15|6,6,1,15|6,7,1,15|6,8,5,15|6,9,3,15|";
map35 += "7,2,3,15|7,3,1,15|7,4,1,15|7,4,1,15|7,5,1,15|7,6,1,15|7,7,5,15|7,8,5,15|7,9,3,15|";
map35 += "8,3,3,15|8,4,1,15|8,5,5,15|8,6,1,15|8,7,1,15|8,8,5,15|8,9,5,15|8,10,3,15|";
map35 += "9,3,3,15|9,4,1,15|9,5,5,15|9,6,1,15|9,7,1,15|9,8,1,15|9,9,5,15|9,10,3,15|";
map35 += "10,2,3,15|10,3,1,15|10,4,1,15|10,5,5,15|10,6,5,15|10,7,1,15|10,8,1,15|10,9,5,15|";
map35 += "11,3,3,15|11,4,3,15|11,5,3,15|11,6,5,15|11,7,3,15|11,8,5,15|11,9,5,15|11,10,3,15|";
map35 += "12,6,3,15|12,7,3,15|12,8,5,15|12,9,3,15|";