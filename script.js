function final_check(){
    let bill_initial_amount = Number(document.getElementById('bill_initial_amount').value);
    // If we don't use function  Number() doc.getId will get value as string that's why we must use Number() function
    let range_input = Number(document.getElementById('tip_percentage').value);
    let people_input = Number(document.getElementById('total_people').value);
    let tip = (bill_initial_amount*range_input)/100;
    let final_amount = bill_initial_amount + tip;
    let tip_per_person = tip/people_input;
    let total_per_person = final_amount/people_input;
    const data = [range_input,people_input,tip,final_amount,tip_per_person,total_per_person,"range_input","people_input","tip","final_amount","tip_per_person","total_per_person"];
    // Approach: instead of textContent we run mapping and we provide same name of id and variable in js
    data.map((val_,index_)=>{
        if(index_<6){
            document.getElementById(`${data[index_+6]}`).textContent = Math.floor(val_);
        }
    });
}
final_check();