let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());



const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
                //modificamos aca edux
                var dia=19;
                if(i===dia){
                    dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today" style="color:red;">
                            <button style='cursor:pointer; background:rgba(205, 92, 92,0); border:none; text-decoration: none; color:gray; text-decoration-color: currentcolor' onclick='consultar(${i},${month+1})' target="blank_">${i}</buttom>
                        </div>`;
                }else{
                    dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today" style="color:green;">
                            <button style='cursor:pointer; background:rgba(205, 92, 92,0); border:none; text-decoration: none; color:gray; text-decoration-color: currentcolor' onclick='consultar(${i},${month+1})' target="blank_">${i}</buttom>
                        </div>`;
                }
        }else{
            if(i==dia){
                dates.innerHTML += ` <div class="calendar__date calendar__item" style="color:gray;">
                        <button style='cursor:pointer; background:rgba(205, 92, 92,0); border:none; text-decoration: none; color:gray; text-decoration-color: currentcolor' onclick='consultar(${i},${month+1})' target="blank_">${i}</buttom>
                    </div>`;
            }else{
                dates.innerHTML += ` <div class="calendar__date calendar__item" style="color:gray;">
                        <button style='cursor:pointer; background:rgba(205, 92, 92,0); border:none; text-decoration: none; color:gray; text-decoration-color: currentcolor' onclick='consultar(${i},${month+1})' target="blank_">${i}</buttom>
                    </div>`;
            }
            
        }
    }
}



const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

const consultar = (dia,mes) => {
    alert(dia+"/"+mes)
}

writeMonth(monthNumber);