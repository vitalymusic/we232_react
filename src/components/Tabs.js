import { useState } from "react"
export function Tabs(){

   const  [activeTab,setActiveTab] = useState(0);
   const [activeBtn, setActiveBtn] = useState(); 
   const [dialog, setDialog] = useState(1); 




    let data = [
       "Tab1",
       "Tab2",
       "Tab3"
    ]


    function showDialog(){
        setDialog(1);
        if(dialog==1){
            setDialog(0)
        }

        
    }
    if(dialog){

   

    return(
        <>        <div className="tabs">
            <div className="buttons">
                <button 
                    onClick={()=>{
                        setActiveTab(0);
                        setActiveBtn(true)
                }} className={activeBtn?"active":""}>Tab 1</button>

                <button onClick={()=>{
                        setActiveTab(1)
                        setActiveBtn(true)
                }} className={activeBtn?"active":""}>Tab 2</button>
                <button
                    onClick={()=>{
                        setActiveTab(2)
                        setActiveBtn(true)
                }} className={activeBtn?"active":""}>Tab 3</button>
            </div>

            <div className="tabsContent">
               <div className="tab">
                     {
                       data[activeTab]
                     }   
                </div> 
            </div>


            <button onClick={showDialog}>Button</button>
        </div>
       
        </>

    )
}

}