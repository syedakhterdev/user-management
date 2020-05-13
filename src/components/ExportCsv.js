import React from 'react';

const ExportCsv = ({users, pageNo}) => {
    const exportCsv = () => {
        let csvContent = "data:text/csv;charset=utf-8,"
        + "First Name, Last Name, Email, Phone, Gender, Age, Picture\n"
        + users.map(e => {
            const user = [
                e.name.first,
                e.name.last,
                e.email,
                e.phone,
                e.gender,
                e.dob.age,
                e.picture.medium

            ]
            user.join(",");
            return user;
        }).join("\n");
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `users-page-${pageNo}.csv`);
        document.body.appendChild(link); // Required for FF

        link.click();
    }
    return (
        <div className="row">
          <div className="col-12 mb-3 text-right">
            <button className="btn btn-primary" onClick={exportCsv}>Download CSV</button>
          </div>
      </div>
    )
}

export default ExportCsv;