
const api_url = "https://retoolapi.dev/EWZWk3/data"

document.addEventListener("DOMContentLoaded", () => {
  const peopleTable = document.getElementById("peopleTable");
  // ha sikeres a promis
  fetch(api_url).then(httpsResponse => httpsResponse.json())
  // .then(responseBody => {
  //   let html = "";
  //   responseBody.forEach(person => {
  //     const tabelRow = `<tr>
  //     <td>${person.id}</td>
  //     <td>${person.Name}</td>
  //     <td>${person.JobTitle}</td>
  //     <td>${person.Location}</td>
  //     <td>${person.CompanyName}</td>
  //     </tr>`;
  //     html += tabelRow;
  //   });
  //   peopleTable.innerHTML = html;
  // });
  .then(responseBody => {
    peopleTable.innerHTML = "";
    responseBody.forEach(person => {
      const tableRow = document.createElement("tr");
      const idTableData = document.createElement("td");
      const NameTableData = document.createElement("td");
      const JobTitleTableData = document.createElement("td");
      const LocationTableData = document.createElement("td");
      const CompanyNameTableData = document.createElement("td");
      idTableData.textContent = person.id;
      NameTableData.textContent = person.Name;
      JobTitleTableData.textContent = person.JobTitle;
      LocationTableData.textContent = person.Location;
      CompanyNameTableData.textContent = person.CompanyName;
      tableRow.appendChild(idTableData);
      tableRow.appendChild(NameTableData);
      tableRow.appendChild(JobTitleTableData);
      tableRow.appendChild(LocationTableData);
      tableRow.appendChild(CompanyNameTableData);
      peopleTable.appendChild(tableRow);
    });
  });
});


