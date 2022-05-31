    let height = document.getElementById('height')
    let width = document.getElementById('width')
    let selector = document.getElementById('selector')
    let form = document.getElementById('form')

    let selectorValue = null
    let selectorOptions = []

    let selectorMiddleValue = null
    let selectorMiddleValueArray = []

    let valueWithX = null
    let valueWithXArray = []

    let selectorSplittedHeight = ''
    let selectorSplittedHeightArray = []

    let selectorSplittedWidth = ''
    let selectorSplittedWidthArray = []


    let widthGoalAfter = ''
    let heightGoalAfter = ''


    let new2 = null


    // first split the selector value

    for (let i=1; i<selector.length-1; i++){
        selectorValue = selector[i].innerText.split(' ')
        selectorOptions.push(selectorValue) 

        valueWithX = selectorValue[1]
        valueWithXArray.push(valueWithX)
        
        selectorMiddleValue =  selectorValue[1].split('x')
        selectorMiddleValueArray.push(selectorMiddleValue)

        selectorSplittedHeight = selectorMiddleValue[0]
        selectorSplittedHeightArray.push(parseInt(selectorSplittedHeight))

        selectorSplittedWidth = selectorMiddleValue[1]
        selectorSplittedWidthArray.push(parseInt(selectorSplittedWidth))
        }
        // console.log(valueWithXArray)
        
        // FIND THE MAX FROM THE ARRAY    H E I G H T   
        
        let arrH = selectorSplittedHeightArray
        let indexesOfsameH = []
        let sameHcount = 0
        // console.log(maxOfH)
        // let indexesOfMaxH = []

        // for (let i=0; i<arrH.length; i++){
        //     if(arrH[i] === maxOfH){
        //         indexesOfMaxH.push(i)
        //     }
        // }
        // console.log(indexesOfMaxH)
        // console.log(arrH.findIndex(arrH => arrH == 0))



        // now find the closest value of the  height and width 

        function findClosestValue(){

            //  for the height 

            let heightCounts = selectorSplittedHeightArray
         heightCounts.sort(function(a, b) {
            return a - b;
          });
            heightGoal = height.value
            let heightGoalBefore = heightGoal

            console.log('heightGoal Before ', heightCounts)

            var heightClosest =heightCounts.reduce(function(prev, curr) {
           
                return (curr > heightGoal && prev <heightGoal && prev != heightGoal )||  curr == heightGoal  ? curr : prev;
            });

            heightGoalAfter = parseInt(heightClosest)

            console.log('heightgoal after' ,heightClosest)


            let ifHeightISLess = heightGoalAfter -   heightGoalBefore 

            if( ifHeightISLess > 0){
                // console.log('updated value of Height is smaller than needed',  ifHeightISLess)
                // console.log('before height closest')
                // indexOfHeight = selectorSplittedHeightArray.indexOf(heightClosest) + 1
                // updatedHeight = selectorSplittedHeightArray.at(indexOfHeight)
                // heightClosest = updatedHeight
                // console.log('updated value of height is ', updatedHeight)

            }
            console.log(ifHeightISLess, 'ifheightis l e s  s')


            //  for the width 

        let widthCounts = selectorSplittedWidthArray
        widthCounts.sort(function(a, b) {
            return a - b;
          });
            widthGoal = width.value
            let widthGoalBefore = widthGoal

            // console.log('widthGoal Before ', widthGoalBefore)
//180
            var widthClosest =widthCounts.reduce(function(prev, curr) {
                return (curr > widthGoal && prev <widthGoal && prev != widthGoal )||  curr == widthGoal  ? curr : prev;
            });

            widthGoalAfter = parseInt(widthClosest)

            console.log('widthgoal after' ,widthGoalAfter)


            let ifWidthISLess =   widthGoalBefore - widthGoalAfter

            if( ifWidthISLess > 0){
                // console.log('updated value Of width  is smaller than needed',  ifWidthISLess)
                // console.log('before widthclosest', widthClosest)
                // // widthClosest = 125   
                //  indexOfwidth = selectorSplittedWidthArray.indexOf(widthClosest) + 1
                //  updateWidth  = selectorSplittedWidthArray.at(indexOfwidth)
                //  widthClosest = updateWidth
                // console.log(indexOfwidth, 'width closest value index of ')
                // console.log(updateWidth, 'Updated width ')
                // console.log(widthClosest, 'after widtchclosest')
            }


            // NOW MATCH THE VALUE FROM THE ARRAY 

            let finalOutput = `${heightClosest}x${widthClosest}`

            // console.log(widthClosest, 'widthclosest')
            // console.log(heightClosest, 'heightclostset')

            let indexOfselectedArray = valueWithXArray.indexOf(finalOutput)

            let arrH = selectorSplittedHeightArray
            let vish = 0
         
            for(let i=0; i<selectorSplittedHeightArray; i++){
                if(arrH[i] === heightClosest){
                    vish++
                }
            }
            console.log(vish)


            if(valueWithXArray.includes(finalOutput)){
                selector.selectedIndex =  valueWithXArray.indexOf(finalOutput) + 1
                // console.log('vissss' ,  valueWithXArray.indexOf(finalOutput) + 1)
            }
            else if(heightClosest > widthClosest){

                console.log('height Goal AFter', heightGoalAfter , 'is bigger than ', widthGoalAfter, 'widthGoal After')
                selector.selectedIndex = selectorSplittedHeightArray.indexOf(heightClosest) +1
                



            }
            else if (heightClosest < widthClosest){
                // console.log('height Goal After', heightGoalAfter, 'is smaller than ', widthGoalAfter, 'widthgoal After')
                selector.selectedIndex = selectorSplittedWidthArray.indexOf(widthClosest) + 1
            }

            let MaxHeight = Math.max(...selectorSplittedHeightArray)


            // console.log( MaxHeight, 'heightarrray dsfdsf')
            // console.log(Math.max(selectorSplittedWidthArray), 'WidthArray dsfdsf')






            




            
        }





        form.addEventListener('input', () => {
            if((height.value != '' && height.value != null) && (width.value != '' && width.value != null)){
                if((height.value > 0 && height.value <= Math.max(...selectorSplittedHeightArray)) && (width.value > 0 && height.value <= Math.max(...selectorSplittedWidthArray)) ){
                    findClosestValue()
                    width.style.color = 'black'
                    height.style.color = 'black'
                }else{
                    console.log('enter valid number')
                    width.style.color = 'red'
                    height.style.color = 'red'
                }
            }

        })