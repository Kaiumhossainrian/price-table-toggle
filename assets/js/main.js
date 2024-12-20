(function ($) {
    "use strict";


        // Pricing Toggle One

        const tableWrapper = document.querySelector(".price_wrapper");
        const switchInputs = document.querySelectorAll(".switch-wrapper input");
        const prices = tableWrapper?.querySelectorAll(".price");
        const toggleClass = "hide_q";
  
        for (const switchInput of switchInputs) {
          switchInput.addEventListener("input", function () {
            for (const price of prices) {
              price.classList.add(toggleClass);
            }
            const activePrices = tableWrapper.querySelectorAll(
              `.price.${switchInput.id}`
            );
            for (const activePrice of activePrices) {
              activePrice.classList.remove(toggleClass);
            }
          });
        }
  
      // Pricing Toggle One End



      // Pricing Toggle
      var checkBox = document.querySelectorAll("#checbox");

      for(let i = 0; i < checkBox.length; i++){
        checkBox[i].addEventListener("click", ()=>{
      console.log('Is CheckBox checked: ', $(this).is(':checked'));
      
          var text1 = document.querySelectorAll(".text1")
          var text2 = document.querySelectorAll(".text2")

          if(checkBox[i].checked == true){
            text1.forEach((e)=>{
              e.style.display = "block";
            })
            text2.forEach((e)=>{
              e.style.display = "none";
            })
          } else if (checkBox[i].checked == false) {
            text1.forEach((e)=>{
              e.style.display = "none";
            })
            text2.forEach((e)=>{
              e.style.display = "block";
            })
          }

        })
      };


      var anaulPrice = document.querySelectorAll(".price-anual");
      var monthlyPrice = document.querySelectorAll(".price-month");


      anaulPrice.forEach((element)=>{
        element.addEventListener("click", ()=>{
      console.log('Monthly');
      
      var text1 = document.querySelectorAll(".text1")
            var text2 = document.querySelectorAll(".text2")

      text1.forEach((e)=>{
        e.style.display = "none";
      });
      text2.forEach((e)=>{
        e.style.display = "block";
      });
      
            if(!element.classList.contains('price-active')){
                element.classList.add('price-active')

                monthlyPrice.forEach((ele)=>{
                    ele.classList.remove('price-active')
                })
            }
        })
      });

      monthlyPrice.forEach((element)=>{
        element.addEventListener("click", ()=>{
      console.log('Yearly');
      
      var text1 = document.querySelectorAll(".text1")
            var text2 = document.querySelectorAll(".text2")

      text1.forEach((e)=>{
        e.style.display = "block";
      });
      text2.forEach((e)=>{
        e.style.display = "none";
      });
      
            if(!element.classList.contains('price-active')){
                element.classList.add('price-active')

                anaulPrice.forEach((ele)=>{
                    ele.classList.remove('price-active')
                })
            }
        })
      });






}(jQuery)); 
