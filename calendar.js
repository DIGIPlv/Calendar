// Get events
var list = document.getElementsByClassName("date");
var eventDate = [];
var i = 0;
while(list[i])
{
	const eventDateString = new Date(Date.parse(list[i].innerText));
	const eventNode = list[i].nextElementSibling.cloneNode(true);
	const eventRepeate = list[i].nextElementSibling.nextElementSibling.innerHTML;
	eventDate.push([eventDateString, eventNode]);
	if(eventRepeate != 0)
	{
		const repeateDates = eventRepeate.split(";");
		repeateDates.forEach(function(repeateDate){
			const repeateDateSplit = repeateDate.split(".");
			const eventRepeateDate = new Date(Date.parse(repeateDateSplit[2] + "-" + repeateDateSplit[1] + "-" + repeateDateSplit[0]));
			const repeateEventNode = eventNode.cloneNode(true);
			repeateEventNode.getElementsByClassName("h5")[0].innerHTML = repeateDateSplit[0];
			repeateEventNode.getElementsByClassName("h5")[2].innerHTML = repeateDateSplit[1];
			repeateEventNode.getElementsByClassName("h5")[4].innerHTML = repeateDateSplit[2];
			if(repeateDateSplit[3])
			{
				repeateEventNode.getElementsByClassName("h5")[5].innerHTML = repeateDateSplit[3];
			}
			else{
				repeateEventNode.getElementsByClassName("h5")[5].innerHTML = "";
			}
			eventDate.push([eventRepeateDate, repeateEventNode]);
		});
	}
	i++;
}
// Calendar
window.onload = function()
{
	const date = new Date();
	const today = new Date();
	let selectedElement = null;
	let selectedElementDate = 99;
	// Variables for event search
	var selectedDate = today.getDate();
	var selectedMonth = today.getMonth();
	var selectedYear =  today.getFullYear();
	hideSlot();
	const renderCalendar = () =>
	{
		const month = date.getMonth();
		date.setDate(1);
		const monthDays = document.querySelector(".days");
		const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
		const firstDayIndex = date.getDay();
		const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
		const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
		if(firstDayIndex == 0)
		{
			var nextDays = 42 - (lastDay + 6);
			var prevDays = 6;
		}
		else
		{
			var nextDays = 42 - (lastDay + firstDayIndex - 1);
			var prevDays = firstDayIndex - 1;
		}
		const months =
		[
			"Janvāris",
			"Februāris",
			"Marts",
			"Aprīlis",
			"Maijs",
			"Jūnijs",
			"Jūlijs",
			"Augusts",
			"Septembris",
			"Oktobris",
			"Novembris",
			"Decembris"
		];
		// Actual event lists
		let prevEvents = [];
		let events = [];
		let nextEvents = [];
		for (let i = 0; i < eventDate.length; i++)
		{
			if(eventDate[i][0].getFullYear() == selectedYear && eventDate[i][0].getMonth() == selectedMonth - 1 && eventDate[i][0].getDate() > prevLastDay - prevDays)
			{
				prevEvents.push(eventDate[i][0].getDate());
			}
			else if(eventDate[i][0].getFullYear() == selectedYear && eventDate[i][0].getMonth() == selectedMonth)
			{
				events.push(eventDate[i][0].getDate());
			}
			else if (eventDate[i][0].getFullYear() == selectedYear && eventDate[i][0].getMonth() == selectedMonth + 1 && eventDate[i][0].getDate() < nextDays)
			{
				nextEvents.push(eventDate[i][0].getDate());
			}
		}

		document.querySelector(".cal-date h3").innerHTML = months[date.getMonth()];
		document.querySelector(".cal-date p").innerHTML = date.getFullYear().toString();
		let days = "";
		switch (firstDayIndex)
		{
			case 0:
				for(let i = 7; i > 1; i--)
				{
					days+= `<div class="prev-date day" id="${prevLastDay - i + 2}">${prevLastDay - i + 2}</div>`;
				}
				break;
			case 1:
				break;
			default:
				for(let i = firstDayIndex; i > 1; i--)
				{
					days+= `<div class="prev-date day" id="${prevLastDay - i + 2}">${prevLastDay - i + 2}</div>`;
				}
		}
		for(let i = 1 ; i<=lastDay; i++)
		{

			if(i === today.getDate() && today.getMonth() === selectedMonth && today.getFullYear() === selectedYear)
			{
				days+= `<div class="today actual day">${i}</div>`;
			}
			else
			{
				days+= `<div class="actual day">${i}</div>`;
			}
		}
		for(let i = 1; i <= nextDays; i++)
		{
			days += `<div class="next-date day"> ${i}</div>`;
		}
		monthDays.innerHTML = days;
		// Adding events
		if(prevEvents.length > 0)
		{
			for(let i = 0; i < prevEvents.length; i++)
			{
				document.getElementById(prevEvents[i]).classList.add("event");
			}
		}
		if(events.length > 0)
		{
			let el = document.getElementsByClassName("actual");
			for(let i = 0; i < events.length; i++)
			{
				el[events[i] - 1].classList.add("event");
			}
			if(selectedElementDate != 99)
			{
				el[selectedElementDate -1].classList.add("selected");
				selectedElementDate = 99;
				selectedElement = document.getElementsByClassName("selected")[0];
			}
		}
		if(nextEvents.length > 0)
		{
			let el = document.getElementsByClassName("next-date");
			for(let i = 0; i < nextEvents.length; i++)
			{
				el[nextEvents[i] - 1].classList.add("event");
			}
		}
		// Date choose
		let day = document.querySelectorAll(".actual");
		for (let i = 0; i < day.length; i++)
		{
			day[i].addEventListener("click", (e) =>
			{
				if(e.target.className.includes("event"))
				{
					if(selectedElement != null)
					{
						selectedElement.classList.remove("selected");
					}
					e.target.classList.add("selected");
					selectedElement = e.target;
					selectedDate = i + 1;
					selectedMonth = date.getMonth() + 1;
					date.setDate(selectedDate);
					displayEvent(date);

				}
			});
		}
		let prevDay = document.querySelectorAll(".prev-date");
		for(let i = 0; i < prevDay.length; i++)
		{
			prevDay[i].addEventListener("click", (e) =>
			{
				if(e.target.className.includes("event"))
				{
					selectedMonth = date.getMonth() - 1;
					date.setMonth(selectedMonth);
					selectedDate = parseInt(prevDay[i].id);
					date.setDate(selectedDate);
					selectedYear = date.getFullYear();
					displayEvent(date);
					if(selectedDate == 31)
					 {
						date.setDate(30);
					 }
					 date.setMonth(selectedMonth + 1);
					 selectedElementDate = selectedDate;
					 document.querySelector(".back").click();
				}
			});
		}
		let nextDay = document.querySelectorAll(".next-date");
		for (let i = 0; i<nextDay.length; i++)
		{
			nextDay[i].addEventListener("click", (e) =>
			{
				if(e.target.className.includes("event"))
				{
					selectedDate = i + 1;
					selectedMonth = date.getMonth() + 1;
					date.setDate(selectedDate);
					date.setMonth(selectedMonth);
					displayEvent(date);
					date.setMonth(selectedMonth - 1);
					selectedElementDate = selectedDate;
					document.querySelector(".fwd").click();
				}
			});
		}
	}
	// Pogas
	document.querySelector(".back").addEventListener("click", () =>
	{
		date.setMonth(date.getMonth() - 1);
		selectedMonth = date.getMonth();
		selectedYear = date.getFullYear();
		renderCalendar();
	});
	document.querySelector(".fwd").addEventListener("click", () =>
	{
		if(selectedDate == 31)
		 {
			date.setDate(30);
		 }
		date.setMonth(date.getMonth() + 1);
		selectedMonth = date.getMonth();
		selectedYear = date.getFullYear();
		renderCalendar();
	});
	renderCalendar();
};

function displayEvent(date)
{
	// Search for items to display
		let j = 0;
		while (eventDate[j] || j < eventDate.length)
		{
			if (eventDate[j][0].getDate() === date.getDate() && eventDate[j][0].getMonth() === date.getMonth() && eventDate[j][0].getFullYear() === date.getFullYear())
			{
				break;
			}
			else
			{
				j++;
			}
		}
		// Display items
		let slot1 = document.getElementById("slot1");
		let slot2 = document.getElementById("slot2");
		if(slot1.firstChild)
		{
			slot1.firstElementChild.remove();
		}
		if(slot2.firstChild)
		{
			slot2.firstElementChild.remove();
		}
		if(eventDate.length > j)
		{
			slot1.appendChild(eventDate[j][1]);
			j++;
		}
		if(eventDate.length > j)
		{
			while(eventDate[j] || j < eventDate.length)
			{
				if(eventDate[j][0].getDate() === date.getDate() && eventDate[j][0].getMonth() === date.getMonth() && eventDate[j][0].getFullYear() === date.getFullYear())
				{
					break;
				}
				j++;
			}
			if(eventDate.length > j)
			{
				slot2.appendChild(eventDate[j][1]);
			}
		}
		hideSlot();
}

function hideSlot()
{
	let slot = document.getElementById("slot2");
	if(slot.getElementsByClassName("empty-state-collection").length > 0 || !slot.firstElementChild)
	{
		slot.style.display = "none";
	}
	else
	{
		slot.style.display = "block";
	}
}
