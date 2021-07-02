// Get event date
var list = document.getElementsByClassName("date");
var eventDate = [];
var i = 0;
while(list[i])
{
	eventDate.push(new Date(Date.parse(list[i].innerText)));
	i++;
}
// TestDevLab school
eventDate.push(new Date(2020, 8, 21));
eventDate.push(new Date(2020, 8, 22));
eventDate.push(new Date(2020, 8, 23));
eventDate.push(new Date(2020, 8, 24));
eventDate.push(new Date(2020, 8, 25));
eventDate.push(new Date(2020, 8, 28));
eventDate.push(new Date(2020, 8, 29));
eventDate.push(new Date(2020, 8, 30));
eventDate.push(new Date(2020, 9, 1));
eventDate.push(new Date(2020, 9, 2));
// 3D Game webinars
eventDate.push(new Date(2020, 8, 12));
eventDate.push(new Date(2020, 8, 15));
eventDate.push(new Date(2020, 8, 17));
// Game challenge registration
eventDate.push(new Date(2021, 2, 1));
eventDate.push(new Date(2021, 2, 2));
eventDate.push(new Date(2021, 2, 3));
eventDate.push(new Date(2021, 2, 4));
eventDate.push(new Date(2021, 2, 5));
eventDate.push(new Date(2021, 2, 6));
eventDate.push(new Date(2021, 2, 7));
eventDate.push(new Date(2021, 2, 8));
eventDate.push(new Date(2021, 2, 9));
eventDate.push(new Date(2021, 2, 10));
eventDate.push(new Date(2021, 2, 11));
eventDate.push(new Date(2021, 2, 12));
eventDate.push(new Date(2021, 2, 13));
eventDate.push(new Date(2021, 2, 14));
// Game challenge
eventDate.push(new Date(2021, 2, 16));
eventDate.push(new Date(2021, 2, 17));
eventDate.push(new Date(2021, 2, 18));
eventDate.push(new Date(2021, 2, 19));
eventDate.push(new Date(2021, 2, 20));
eventDate.push(new Date(2021, 2, 21));
eventDate.push(new Date(2021, 2, 22));
eventDate.push(new Date(2021, 2, 23));
eventDate.push(new Date(2021, 2, 24));
eventDate.push(new Date(2021, 2, 25));
eventDate.push(new Date(2021, 2, 26));
eventDate.push(new Date(2021, 2, 27));
eventDate.push(new Date(2021, 2, 28));
eventDate.push(new Date(2021, 2, 29));
eventDate.push(new Date(2021, 2, 30));
// Digital kick
eventDate.push(new Date(2021, 3, 5));
eventDate.push(new Date(2021, 3, 6));
eventDate.push(new Date(2021, 3, 7));
eventDate.push(new Date(2021, 3, 8));
eventDate.push(new Date(2021, 3, 9));
eventDate.push(new Date(2021, 3, 12));
eventDate.push(new Date(2021, 3, 13));
eventDate.push(new Date(2021, 3, 14));
eventDate.push(new Date(2021, 3, 15));
eventDate.push(new Date(2021, 3, 16));
eventDate.push(new Date(2021, 3, 19));
eventDate.push(new Date(2021, 3, 20));
eventDate.push(new Date(2021, 3, 21));
eventDate.push(new Date(2021, 3, 22));
eventDate.push(new Date(2021, 3, 23));
eventDate.push(new Date(2021, 3, 26));
eventDate.push(new Date(2021, 3, 27));
eventDate.push(new Date(2021, 3, 28));
eventDate.push(new Date(2021, 3, 29));


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
	const renderCalendar = () =>
	{
		const month = date.getMonth();
		date.setDate(1);  // Date to first date
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
			if(eventDate[i].getFullYear() == selectedYear && eventDate[i].getMonth() == selectedMonth - 1 && eventDate[i].getDate() > prevLastDay - prevDays)
			{
				prevEvents.push(eventDate[i].getDate());
			}
			else if(eventDate[i].getFullYear() == selectedYear && eventDate[i].getMonth() == selectedMonth)
			{
				events.push(eventDate[i].getDate());
			}
			else if (eventDate[i].getFullYear() == selectedYear && eventDate[i].getMonth() == selectedMonth + 1 && eventDate[i].getDate() < nextDays)
			{
				nextEvents.push(eventDate[i].getDate());
			}
		}
		//End Actual events list
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
			if(i === today.getDate() && today.getMonth() === selectedMonth)
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
		let selected = "";
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
					selected = selectedYear + '-';
					if(selectedMonth < 10)
					{
						selected = selected + '0' + selectedMonth + '-';
					}
					else
					{
						selected = selected + selectedMonth + '-';
					}
					if(selectedDate < 10)
					{
						selected = selected + '0' + selectedDate;
					}
					else
					{
						selected = selected + selectedDate;
					}
					// Search for items to display
					// If manual dates
					if(selected == '2020-09-21' || selected == '2020-09-22' || selected == '2020-09-23' || selected == '2020-09-24' || selected == '2020-09-25'
					|| selected == '2020-09-28' || selected == '2020-09-29' || selected == '2020-09-30' || selected == '2020-10-01' || selected == '2020-10-02'
					|| selected == '2020-09-12' || selected == '2020-09-15' || selected == '2020-09-17' || selected == '2021-03-01' || selected == '2021-03-02'
				  || selected == '2021-03-03' || selected == '2021-03-04' || selected == '2021-03-05' || selected == '2021-03-06' || selected == '2021-03-07'
				  || selected == '2021-03-08' || selected == '2021-03-09' || selected == '2021-03-10' || selected == '2021-03-11' || selected == '2021-03-12'
				  || selected == '2021-03-13' || selected == '2021-03-14' || selected == '2021-03-16' || selected == '2021-03-17' || selected == '2021-03-18'
				  || selected == '2021-03-19' || selected == '2021-03-20' || selected == '2021-03-21' || selected == '2021-03-22' || selected == '2021-03-23'
				  || selected == '2021-03-24' || selected == '2021-03-25' || selected == '2021-03-26' || selected == '2021-03-27' || selected == '2021-03-28'
				  || selected == '2021-03-29' || selected == '2021-03-30' || selected == '2021-04-06' || selected == '2021-04-07' || selected == '2021-04-08'
				  || selected == '2021-04-09' || selected == '2021-04-12' || selected == '2021-04-13' || selected == '2021-04-14' || selected == '2021-04-15'
				  || selected == '2021-04-16' || selected == '2021-04-19' || selected == '2021-04-20' || selected == '2021-04-21' || selected == '2021-04-22'
  				|| selected == '2021-04-23' || selected == '2021-04-26' || selected == '2021-04-27' || selected == '2021-04-28' || selected == '2021-04-29'
				  || selected == '2021-04-05')
					{
						if(selected == '2020-09-12' || selected == '2020-09-15' || selected == '2020-09-17')
						{
							selected = '2020-09-19';
							let eventList = document.getElementById("source").getElementsByClassName("date");
							let j = 0;
							while (eventList[j] || j < eventList.lenght)
							{
								if (eventList[j].innerText == selected)
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
							if(eventList.length > j)
							{
								slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
							}
						}
						else if(selected == '2020-10-02')
							{
								let eventList = document.getElementById("source").getElementsByClassName("date");
								let j = 0;
								while (eventList[j] || j < eventList.lenght)
								{
									if (eventList[j].innerText == selected)
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
								if(eventList.length > j)
								{
									slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
								}
								selected = '2020-09-21';
									j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
										{
											break;
										}
										else
										{
											j++;
										}
									}
									// Display items
									if(eventList.length > j)
									{
										slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
							}
							else if(selected == '2021-04-06' || selected == '2021-04-07' || selected == '2021-04-08'
						  || selected == '2021-04-09' || selected == '2021-04-12' || selected == '2021-04-13' || selected == '2021-04-14' || selected == '2021-04-15'
						  || selected == '2021-04-16' || selected == '2021-04-19' || selected == '2021-04-20' || selected == '2021-04-21' || selected == '2021-04-22'
		  				|| selected == '2021-04-23' || selected == '2021-04-26' || selected == '2021-04-27' || selected == '2021-04-28' || selected == '2021-04-29'
						  || selected == '2021-04-05')
							{
								if(selected == '2021-04-08')
								{
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
									selected = '2021-04-30';
										j = 0;
										while (eventList[j] || j < eventList.lenght)
										{
											if (eventList[j].innerText == selected)
											{
												break;
											}
											else
											{
												j++;
											}
										}
										// Display items
										if(eventList.length > j)
										{
											slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
										}
								}
								else if (selected == '2021-04-09') {
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
									selected = '2021-04-30';
										j = 0;
										while (eventList[j] || j < eventList.lenght)
										{
											if (eventList[j].innerText == selected)
											{
												break;
											}
											else
											{
												j++;
											}
										}
										// Display items
										if(eventList.length > j)
										{
											slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
										}
								}
								else
								{
									selected = '2021-04-30';
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
								}
							}
							else if(selected == '2021-03-01' || selected == '2021-03-02'
						  || selected == '2021-03-03' || selected == '2021-03-04' || selected == '2021-03-05' || selected == '2021-03-06' || selected == '2021-03-07'
						  || selected == '2021-03-08' || selected == '2021-03-09' || selected == '2021-03-10' || selected == '2021-03-11' || selected == '2021-03-12'
						  || selected == '2021-03-13' || selected == '2021-03-14')
							{
								selected = '2021-03-15';
								let eventList = document.getElementById("source").getElementsByClassName("date");
								let j = 0;
								while (eventList[j] || j < eventList.lenght)
								{
									if (eventList[j].innerText == selected)
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
								if(eventList.length > j)
								{
									slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
								}
							}
							else if(selected == '2021-03-16' || selected == '2021-03-17' || selected == '2021-03-18'
						  || selected == '2021-03-19' || selected == '2021-03-20' || selected == '2021-03-21' || selected == '2021-03-22' || selected == '2021-03-23'
						  || selected == '2021-03-24' || selected == '2021-03-25' || selected == '2021-03-26' || selected == '2021-03-27' || selected == '2021-03-28'
						  || selected == '2021-03-29' || selected == '2021-03-30')
							{
									selected = '2021-03-31';
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
						  }
							else
							{
								selected = '2020-09-21';
								let eventList = document.getElementById("source").getElementsByClassName("date");
								let j = 0;
								while (eventList[j] || j < eventList.lenght)
								{
									if (eventList[j].innerText == selected)
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
								if(eventList.length > j)
								{
									slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
								}
							}
					}
					else
					{
						let eventList = document.getElementById("source").getElementsByClassName("date");
						let j = 0;
						while (eventList[j] || j < eventList.lenght)
						{
							if (eventList[j].innerText == selected)
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
						if(eventList.length > j)
						{

							slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
							j++;
						}
						if(eventList.length > j && eventList[j].innerHTML == selected)
						{
							slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
						}
					}
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
					selectedDate = parseInt(prevDay[i].id);
					selectedMonth = date.getMonth();
					selectedYear = date.getFullYear();
					date.setDate(selectedDate);
					date.setFullYear(selectedYear);
					selected = selectedYear + '-';
					selectedElementDate = selectedDate;
					if(selectedMonth < 10)
					{
						selected = selected + '0' + selectedMonth + '-';
					}
					else
					{
						selected = selected + selectedMonth + '-';
					}
					if(selectedDate < 10)
					{
						selected = selected + '0' + selectedDate;
					}
					else
					{
						selected = selected + selectedDate;
					}
					// Search for items to display
					// If manual dates
					if(selected == '2020-09-21' || selected == '2020-09-22' || selected == '2020-09-23' || selected == '2020-09-24' || selected == '2020-09-25'
					|| selected == '2020-09-28' || selected == '2020-09-29' || selected == '2020-09-30' || selected == '2020-10-01' || selected == '2020-10-02'
					|| selected == '2020-09-12' || selected == '2020-09-15' || selected == '2020-09-17' || selected == '2021-03-01' || selected == '2021-03-02'
				  || selected == '2021-03-03' || selected == '2021-03-04' || selected == '2021-03-05' || selected == '2021-03-06' || selected == '2021-03-07'
				  || selected == '2021-03-08' || selected == '2021-03-09' || selected == '2021-03-10' || selected == '2021-03-11' || selected == '2021-03-12'
				  || selected == '2021-03-13' || selected == '2021-03-14' || selected == '2021-03-16' || selected == '2021-03-17' || selected == '2021-03-18'
				  || selected == '2021-03-19' || selected == '2021-03-20' || selected == '2021-03-21' || selected == '2021-03-22' || selected == '2021-03-23'
				  || selected == '2021-03-24' || selected == '2021-03-25' || selected == '2021-03-26' || selected == '2021-03-27' || selected == '2021-03-28'
				  || selected == '2021-03-29' || selected == '2021-03-30' || selected == '2021-04-06' || selected == '2021-04-07' || selected == '2021-04-08'
				  || selected == '2021-04-09' || selected == '2021-04-12' || selected == '2021-04-13' || selected == '2021-04-14' || selected == '2021-04-15'
				  || selected == '2021-04-16' || selected == '2021-04-19' || selected == '2021-04-20' || selected == '2021-04-21' || selected == '2021-04-22'
  				|| selected == '2021-04-23' || selected == '2021-04-26' || selected == '2021-04-27' || selected == '2021-04-28' || selected == '2021-04-29'
				  || selected == '2021-04-05')
					{
						if(selected == '2020-09-12' || selected == '2020-09-15' || selected == '2020-09-17')
						{
							selected = '2020-09-19';
							let eventList = document.getElementById("source").getElementsByClassName("date");
							let j = 0;
							while (eventList[j] || j < eventList.lenght)
							{
								if (eventList[j].innerText == selected)
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
							if(eventList.length > j)
							{
								slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
							}
						}
						else if(selected == '2020-10-02')
							{
								let eventList = document.getElementById("source").getElementsByClassName("date");
								let j = 0;
								while (eventList[j] || j < eventList.lenght)
								{
									if (eventList[j].innerText == selected)
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
								if(eventList.length > j)
								{
									slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
								}
								selected = '2020-09-21';
									j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
										{
											break;
										}
										else
										{
											j++;
										}
									}
									// Display items
									if(eventList.length > j)
									{
										slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
							}
							else if(selected == '2021-03-01' || selected == '2021-03-02'
							|| selected == '2021-03-03' || selected == '2021-03-04' || selected == '2021-03-05' || selected == '2021-03-06' || selected == '2021-03-07'
							|| selected == '2021-03-08' || selected == '2021-03-09' || selected == '2021-03-10' || selected == '2021-03-11' || selected == '2021-03-12'
							|| selected == '2021-03-13' || selected == '2021-03-14')
							{
								selected = '2021-03-15';
								let eventList = document.getElementById("source").getElementsByClassName("date");
								let j = 0;
								while (eventList[j] || j < eventList.lenght)
								{
									if (eventList[j].innerText == selected)
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
								if(eventList.length > j)
								{
									slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
								}
							}
							else if(selected == '2021-04-06' || selected == '2021-04-07' || selected == '2021-04-08'
							|| selected == '2021-04-09' || selected == '2021-04-12' || selected == '2021-04-13' || selected == '2021-04-14' || selected == '2021-04-15'
							|| selected == '2021-04-16' || selected == '2021-04-19' || selected == '2021-04-20' || selected == '2021-04-21' || selected == '2021-04-22'
							|| selected == '2021-04-23' || selected == '2021-04-26' || selected == '2021-04-27' || selected == '2021-04-28' || selected == '2021-04-29'
							|| selected == '2021-04-05')
							{
								if(selected == '2021-04-08')
								{
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
									selected = '2021-04-30';
										j = 0;
										while (eventList[j] || j < eventList.lenght)
										{
											if (eventList[j].innerText == selected)
											{
												break;
											}
											else
											{
												j++;
											}
										}
										// Display items
										if(eventList.length > j)
										{
											slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
										}
								}
								else if (selected == '2021-04-09') {
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
									selected = '2021-04-30';
										j = 0;
										while (eventList[j] || j < eventList.lenght)
										{
											if (eventList[j].innerText == selected)
											{
												break;
											}
											else
											{
												j++;
											}
										}
										// Display items
										if(eventList.length > j)
										{
											slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
										}
								}
								else
								{
									selected = '2021-04-30';
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
								}
							}
							else if(selected == '2021-03-16' || selected == '2021-03-17' || selected == '2021-03-18'
							|| selected == '2021-03-19' || selected == '2021-03-20' || selected == '2021-03-21' || selected == '2021-03-22' || selected == '2021-03-23'
							|| selected == '2021-03-24' || selected == '2021-03-25' || selected == '2021-03-26' || selected == '2021-03-27' || selected == '2021-03-28'
							|| selected == '2021-03-29' || selected == '2021-03-30')
							{
									selected = '2021-03-31';
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
						  }
							else
							{
								selected = '2020-09-21';
								let eventList = document.getElementById("source").getElementsByClassName("date");
								let j = 0;
								while (eventList[j] || j < eventList.lenght)
								{
									if (eventList[j].innerText == selected)
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
								if(eventList.length > j)
								{
									slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
								}
							}
					}
					else
					{
						let eventList = document.getElementById("source").getElementsByClassName("date");
						let j = 0;
						while (eventList[j] || j < eventList.lenght)
						{
							if (eventList[j].innerText == selected)
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
						if(eventList.length > j)
						{

							slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
							j++;
						}
						if(eventList.length > j && eventList[j].innerHTML == selected)
						{
							slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
						}
					}
					if(selectedDate == 31)
					 {
						date.setDate(30);
						date.setMonth(date.getMonth() - 1);

					 }
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
					selectedMonth = date.getMonth() + 2;
					selectedYear = date.getFullYear();
					date.setDate(selectedDate);
					date.setFullYear(selectedYear);
					selected = selectedYear + '-';
					selectedElementDate = selectedDate;
					if(selectedMonth < 10)
					{
						selected = selected + '0' + selectedMonth + '-';
					}
					else
					{
						selected = selected + selectedMonth + '-';
					}
					if(selectedDate < 10)
					{
						selected = selected + '0' + selectedDate;
					}
					else
					{
						selected = selected + selectedDate;
					}
					// Search for items to display
					// If manual dates
					if(selected == '2020-09-21' || selected == '2020-09-22' || selected == '2020-09-23' || selected == '2020-09-24' || selected == '2020-09-25'
					|| selected == '2020-09-28' || selected == '2020-09-29' || selected == '2020-09-30' || selected == '2020-10-01' || selected == '2020-10-02'
					|| selected == '2020-09-12' || selected == '2020-09-15' || selected == '2020-09-17' || selected == '2021-03-01' || selected == '2021-03-02'
				  || selected == '2021-03-03' || selected == '2021-03-04' || selected == '2021-03-05' || selected == '2021-03-06' || selected == '2021-03-07'
				  || selected == '2021-03-08' || selected == '2021-03-09' || selected == '2021-03-10' || selected == '2021-03-11' || selected == '2021-03-12'
				  || selected == '2021-03-13' || selected == '2021-03-14' || selected == '2021-03-16' || selected == '2021-03-17' || selected == '2021-03-18'
				  || selected == '2021-03-19' || selected == '2021-03-20' || selected == '2021-03-21' || selected == '2021-03-22' || selected == '2021-03-23'
				  || selected == '2021-03-24' || selected == '2021-03-25' || selected == '2021-03-26' || selected == '2021-03-27' || selected == '2021-03-28'
				  || selected == '2021-03-29' || selected == '2021-03-30' || selected == '2021-04-06' || selected == '2021-04-07' || selected == '2021-04-08'
				  || selected == '2021-04-09' || selected == '2021-04-12' || selected == '2021-04-13' || selected == '2021-04-14' || selected == '2021-04-15'
				  || selected == '2021-04-16' || selected == '2021-04-19' || selected == '2021-04-20' || selected == '2021-04-21' || selected == '2021-04-22'
  				|| selected == '2021-04-23' || selected == '2021-04-26' || selected == '2021-04-27' || selected == '2021-04-28' || selected == '2021-04-29'
				  || selected == '2021-04-05')
					{
						if(selected == '2020-09-12' || selected == '2020-09-15' || selected == '2020-09-17')
						{
							selected = '2020-09-19';
							let eventList = document.getElementById("source").getElementsByClassName("date");
							let j = 0;
							while (eventList[j] || j < eventList.lenght)
							{
								if (eventList[j].innerText == selected)
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
							if(eventList.length > j)
							{
								slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
							}
						}
						else if(selected == '2020-10-02')
							{
								let eventList = document.getElementById("source").getElementsByClassName("date");
								let j = 0;
								while (eventList[j] || j < eventList.lenght)
								{
									if (eventList[j].innerText == selected)
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
								if(eventList.length > j)
								{
									slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
								}
								selected = '2020-09-21';
									j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
										{
											break;
										}
										else
										{
											j++;
										}
									}
									// Display items
									if(eventList.length > j)
									{
										slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
							}
							else if(selected == '2021-04-06' || selected == '2021-04-07' || selected == '2021-04-08'
							|| selected == '2021-04-09' || selected == '2021-04-12' || selected == '2021-04-13' || selected == '2021-04-14' || selected == '2021-04-15'
							|| selected == '2021-04-16' || selected == '2021-04-19' || selected == '2021-04-20' || selected == '2021-04-21' || selected == '2021-04-22'
							|| selected == '2021-04-23' || selected == '2021-04-26' || selected == '2021-04-27' || selected == '2021-04-28' || selected == '2021-04-29'
							|| selected == '2021-04-05')
							{
								if(selected == '2021-04-08')
								{
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
									selected = '2021-04-30';
										j = 0;
										while (eventList[j] || j < eventList.lenght)
										{
											if (eventList[j].innerText == selected)
											{
												break;
											}
											else
											{
												j++;
											}
										}
										// Display items
										if(eventList.length > j)
										{
											slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
										}
								}
								else if (selected == '2021-04-09') {
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
									selected = '2021-04-30';
										j = 0;
										while (eventList[j] || j < eventList.lenght)
										{
											if (eventList[j].innerText == selected)
											{
												break;
											}
											else
											{
												j++;
											}
										}
										// Display items
										if(eventList.length > j)
										{
											slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
										}
								}
								else
								{
									selected = '2021-04-30';
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
								}
							}
							else if(selected == '2021-03-01' || selected == '2021-03-02'
						  || selected == '2021-03-03' || selected == '2021-03-04' || selected == '2021-03-05' || selected == '2021-03-06' || selected == '2021-03-07'
						  || selected == '2021-03-08' || selected == '2021-03-09' || selected == '2021-03-10' || selected == '2021-03-11' || selected == '2021-03-12'
						  || selected == '2021-03-13' || selected == '2021-03-14')
							{
								selected = '2021-03-15';
								let eventList = document.getElementById("source").getElementsByClassName("date");
								let j = 0;
								while (eventList[j] || j < eventList.lenght)
								{
									if (eventList[j].innerText == selected)
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
								if(eventList.length > j)
								{
									slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
								}
							}
							else if(selected == '2021-03-16' || selected == '2021-03-17' || selected == '2021-03-18'
						  || selected == '2021-03-19' || selected == '2021-03-20' || selected == '2021-03-21' || selected == '2021-03-22' || selected == '2021-03-23'
						  || selected == '2021-03-24' || selected == '2021-03-25' || selected == '2021-03-26' || selected == '2021-03-27' || selected == '2021-03-28'
						  || selected == '2021-03-29' || selected == '2021-03-30')
							{
									selected = '2021-03-31';
									let eventList = document.getElementById("source").getElementsByClassName("date");
									let j = 0;
									while (eventList[j] || j < eventList.lenght)
									{
										if (eventList[j].innerText == selected)
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
									if(eventList.length > j)
									{
										slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
									}
						  }
							else
							{
								selected = '2020-09-21';
								let eventList = document.getElementById("source").getElementsByClassName("date");
								let j = 0;
								while (eventList[j] || j < eventList.lenght)
								{
									if (eventList[j].innerText == selected)
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
								if(eventList.length > j)
								{
									slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
								}
							}
					}
					else
					{
						let eventList = document.getElementById("source").getElementsByClassName("date");
						let j = 0;
						while (eventList[j] || j < eventList.lenght)
						{
							if (eventList[j].innerText == selected)
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
						if(eventList.length > j)
						{

							slot1.appendChild(eventList[j].nextSibling.cloneNode(true));
							j++;
						}
						if(eventList.length > j && eventList[j].innerHTML == selected)
						{
							slot2.appendChild(eventList[j].nextSibling.cloneNode(true));
						}
					}
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
		date.setMonth(date.getMonth() + 1);
		selectedMonth = date.getMonth();
		selectedYear = date.getFullYear();
		renderCalendar();
	});
	renderCalendar();
};
