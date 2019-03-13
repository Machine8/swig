


  $(document).ready(function(){


         let chek = (item, item2) =>{
           $('.box-input').on('click', `i#n${item}` , function(){

                // $(`i#n${item}`).css({'pointerEvents':`${keye}`});



                if($(`#n${item}`).is(':checked')){


                  var items = $(this).attr("id");
                  // $('.myCheckbox').is(':checked');
                  $(this).addClass("active");
                     /*$("#"+items+"-data").addClass("display").siblings().removeClass("display");*/
                     if($(`#n${item}`).attr('checked',true)){
                      $(`i#n${item2}`).css({'pointerEvents':'none'});


                    }else{
                       $(`i#n${item2}`).css({'pointerEvents':'auto'});

                    }

                  console.log(items);
                  alert(item2);
                }else{
                   $(this).removeClass("active");
                }



              });
         }




        if(chek(1)){
          chek(2,1);
          chek(3,2);
        }

        else if( chek(2,1) ){
             chek(3,2);
        }




  });
