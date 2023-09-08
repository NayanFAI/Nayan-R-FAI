/*
    create JS class called Expense with attribute id,dasc,date,amount,category
    create JS class called ExpenseManager that has one attribute called expenseArray,
    The function of the ExpenseManager will be the CRUD operation:addExpense,updateExpense,getAllExpense,findExpenseBydate(date),findExpenseByCategory(category)
*/
class Vehicle{
    constructor(id,details,date,amount,category){
        this.id=id;
        this.details=details;
        this.date=date;
        this.amount=amount;
        this.category=category;
    }
}
class TollManager{
    vehicles=[];
    getData(){
        if(localStorage.getItem("all")!=undefined){
            this.vehicles=JSON.parse(localStorage.getItem("all"));
        }
    }
    addNewVehicle=(ex)=>{
        this.getData();
        this.expenses.push(ex);
        localStorage.setItem("all",JSON.stringify(this.vehicles));
    }
    getAllVehicles=()=>{this.getData(); return this.vehicles};


updateVehicle=(id,ex)=>{
    const index=this.vehicles.findIndex((e)=>e.id==id);
    if(index==-1){
        throw "Vehicle not found to update";
    }
    this.vehicles.splice(index,1,ex);
    localStorage.setItem("all",JSON.stringify(this.vehicles));
}

getStringDate(dt){
    return `${dt.getDate()}-${dt.getMonth()+1}-${dt.getFullYear()}`
}

findRevenueByDate(dt){
    this.getData();
    return this.vehicles.filter((e)=>this.getStringDate(dt)==this.getStringDate(new Date(e.date)))
}

findRevenueByCategory(cat){
    this.getData();
    return this.vehicles.filter((e)=>e.category==cat);
}
}
