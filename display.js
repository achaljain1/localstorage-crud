async function datashow(){
    let mytable =`
    <table border="2px" width="1000px" align="center">
    <tr bgcolor="#0b3cc1">
    <th> ID</th>
    <th> EMP NO</th>
    <th> NAME</th>
    <th>SALARY</th>
    <th>CITY</th>
    </tr>
    `;
    let url ="http://localhost:3000/employees";
    let myobj = await fetch(url);
    console.log(myobj);

    let mydata = await myobj.json();
    console.log(mydata);

    mydata.map((key)=>{
        mytable+= `
        <tr>
        <td>${key.id}</td>
        <td>${key.employeeNo}</td>
        <td>${key.name}</td>
        <td>${key.salary}</td>
        <td>${key.city}</td>
        `
    });

    mytable +=`</table>`;
    document.getElementById('demo').innerHTML= mytable;
     
}

datashow()