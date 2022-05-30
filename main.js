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


    // first split the selector value

    for (let i=1; i<selector.length-1; i++){
        selectorValue = selector[i].innerText.split(' ')
        selectorOptions.push(selectorValue) 

        valueWithX = selectorValue[1]
        valueWithXArray.push(valueWithX)
        
        selectorMiddleValue =  selectorValue[1].split('x')
        selectorMiddleValueArray.push(selectorMiddleValue)

        selectorSplittedHeight = selectorMiddleValue[0]
        selectorSplittedHeightArray.push(selectorSplittedHeight)

        selectorSplittedWidth = selectorMiddleValue[1]
        selectorSplittedWidthArray.push(selectorSplittedWidth)
        }
        console.log(valueWithXArray)




        // now find the closest value of the  height and width 

        function findClosestValue(){

            //  for the height 

            let heightCounts = selectorSplittedHeightArray
            heightGoal = height.value
            let heightGoalBefore = heightGoal

            console.log('heightGoal Before ', heightGoal)

            var heightClosest =heightCounts.reduce(function(prev, curr) {
                return (Math.abs(curr - heightGoal) < Math.abs(prev - heightGoal) ? curr : prev);
            });

            heightGoalAfter = parseInt(heightClosest)

            console.log('heightgoal after' ,heightClosest)


            let ifHeightISLess = heightGoalBefore - heightGoalAfter

            if( ifHeightISLess > 0){
                console.log('updated value of Height is smaller than needed',  ifHeightISLess)
            }


            //  for the width 

        let widthCounts = selectorSplittedWidthArray
            widthGoal = width.value
            let widthGoalBefore = widthGoal

            console.log('widthGoal Before ', widthGoalBefore)

            var widthClosest =widthCounts.reduce(function(prev, curr) {
                return (Math.abs(curr - widthGoal) < Math.abs(prev - widthGoal) ? curr : prev);
            });

            widthGoalAfter = parseInt(widthClosest)

            console.log('widthgoal after' ,widthGoalAfter)


            let ifWidthISLess = widthGoalBefore - widthGoalAfter

            if( ifWidthISLess > 0){
                console.log('updated value Of width  is smaller than needed',  ifWidthISLess)
            }


            // NOW MATCH THE VALUE FROM THE ARRAY 

            let finalOutput = `${heightClosest}x${widthClosest}`

            console.log(widthClosest, 'widthclosest')
            console.log(heightClosest, 'heightclostset')

            let indexOfselectedArray = valueWithXArray.indexOf(finalOutput)

            if(valueWithXArray.includes(finalOutput)){
                selector.selectedIndex =  valueWithXArray.indexOf(finalOutput) + 1
                console.log('vissss' ,  valueWithXArray.indexOf(finalOutput) + 1)
            }
            else if(heightClosest > widthClosest){
                console.log('height Goal AFter', heightGoalAfter , 'is bigger than ', widthGoalAfter, 'widthGoal After')
                selector.selectedIndex = selectorSplittedHeightArray.indexOf(heightClosest) + 1
            }
            else if (heightClosest < widthClosest){
                console.log('height Goal After', heightGoalAfter, 'is smaller than ', widthGoalAfter, 'widthgoal After')
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
                }else{
                    console.log('enter valid number')
                    width.style.color = 'red'
                    height.style.color = 'red'
                }
            }
        })