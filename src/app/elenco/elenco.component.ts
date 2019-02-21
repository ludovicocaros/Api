import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
$.ajax(
  {
    type:"GET",
    url:"https://newsapi.org/v2/everything?q=arresti&apiKey=599047e207da41c5a8fb1509cf0ae945",
      data:"html",
  
    success:function(data) 
    {
      for (var i = 0; i<10; i++) {
        $("table").append("<tr>"+"<td>"+ data.articles[i].author + "</td>"+"<td>"+ data.articles[i].title + "</td>"+"<td>"+ data.articles[i].description + "</td>"+"</tr>")
      }
      $(function(){
        $("tr").mouseenter(function(){
        
          $(this).animate({fontSize:"25px"}),1000;
         });
        });

        $(function(){
          $("tr").mouseleave(function(){
          
            $(this).animate({fontSize:"15px"}),1000;
           });
          });
       
    },
    error:function(xhr){
    console.log("error")
  }
  });
  
  
    