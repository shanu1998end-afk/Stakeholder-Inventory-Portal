const stakeholders = [
    {"ser": "Federal Ministries and Departments", "department": "", "phone": "", "email": ""},
    {"ser": "1", "department": "Secretary, Ministry of Housing and Works", "phone": "Secretary office: 051-9214283", "email": "Email: oic.itcell@mohw.gov.pk"},
    {"ser": "2", "department": "Secretary, Ministry of Planning Development and Special Initiative", "phone": "Secretary office: 051-9212831, 051-9206444\nChief (Physical Planning and Housing): 051-9206748", "email": "Email: secretary@pc.gov.pk, Chief_pph@pc.gov.pk"},
    {"ser": "3", "department": "Secretary, Ministry of Climate change and Environmental Coordination", "phone": "Secretary office: +92 51 9224579", "email": "Email: secretary@mocc.gov.pk"},
    {"ser": "4", "department": "Secretary, Ministry of Railway", "phone": "Phone: +(92-51) 9210527", "email": "Email: secretary@railways.gov.pk, contact@railways.gov.pk"},
    {"ser": "5", "department": "Secretary, Ministry of Water Resource", "phone": "", "email": ""},
    {"ser": "6", "department": "Seceratary Ministry of Communications", "phone": "", "email": ""},
    {"ser": "7", "department": "Chairman, Capital Development Authority (CDA) Islamabad", "phone": "", "email": ""},
    {"ser": "8", "department": "Chairman Pakistan Commision for Indus Water (PCIW)", "phone": "", "email": ""},
    {"ser": "9", "department": "Chairman, Pakistan Engineering Council. (PEC)", "phone": "PEC (info): (+92-51) 9219500, 9206974\nRegistrar office Ph: 051-9214422 Ext. 215", "email": "Email Registrar: kmnasir@pec.org.pk"},
    {"ser": "10", "department": "Chairman, Pakistan Council of Architect & Town Planners (PCATP)", "phone": "", "email": ""},
    {"ser": "11", "department": "Chief Statistician, Pakistan Beauru of Statistics, Islamabad", "phone": "", "email": ""},
    {"ser": "Province Departments and Authorities", "department": "", "phone": "", "email": ""},
    {"ser": "12", "department": "Additional Chief Secretary, Planning and Development Department, KPK", "phone": "Phone: +92 91 92 10494-95", "email": "Email: info@pndkp.gov.pk"},
    {"ser": "13", "department": "Additional Chief Secretary, Planning and Development Department, Punjab", "phone": "Phone: +92 42 99210092,\n+92 42 99213507", "email": "Email: acs@punjab.gov.pk\ninfo@pndpunjab.gov.pk"},
    {"ser": "14", "department": "Additional Chief Secretary, Planning and Development Department, Balochistan", "phone": "Phone: +92-81-9201052 / +92-81-9202048", "email": "Email: support@pnd.balochistan.gov.pk"},
    {"ser": "15", "department": "Additional Chief Secretary, Planning and Development Department, Sindh", "phone": "Phone: 02199211415", "email": "Email: info@sindh.gov.pk"},
    {"ser": "16", "department": "Additional Chief Secretary, Planning and Development Department, Gilgit Baltistan", "phone": "Phone: (058119) 20214", "email": "Email: office@pnd.gog.pk"},
    {"ser": "17", "department": "Additional Chief Secretary, Planning and Development Department, Azad Jammu Kashmir", "phone": "Phone (ACS Office): 05822-921396", "email": "Email: acs.dev@pndajk.gov.pk"},
    {"ser": "18", "department": "Chief Executive Officer, Infrastructure Development Authority Punjab (IDAP), Punjab", "phone": "Phone: +92 42 99332631- 42", "email": "Email: info@idap.pk"},
    {"ser": "19", "department": "Director General, Sindh Building Control Authority (SBCA)", "phone": "", "email": ""},
    {"ser": "20", "department": "Director General, Gilgit Development Authority", "phone": "", "email": ""},
    {"ser": "21", "department": "Director General, Peshawar Development Authority (PDA)", "phone": "", "email": ""},
    {"ser": "22", "department": "Director General, Rawalpindi Development Authority", "phone": "", "email": ""},
    {"ser": "23", "department": "Director General, Galiyat Development Authority (GDA)", "phone": "Phone: 0992-9310240", "email": "Email: gdaatd@gmail.com"},
    {"ser": "24", "department": "Director General, Quetta Development Authority (QDA)", "phone": "Phone: 081-9211067", "email": "Email: info@qda.gob.pk"},
    {"ser": "25", "department": "Director General, Multan Development Authority (MDA)", "phone": "Phone: +92-61-9200827", "email": "Email:  info@mda.punjab.gov.pk"},
    {"ser": "26", "department": "Director General, Faisalabad Development Authority (FDA)", "phone": "Phone: +92419200088-89", "email": "Email:  fda_fsd@yahoo.com"},
    {"ser": "27", "department": "Director General, Gujranwala Development Authority (GDA)", "phone": "Phone: 055-9200176", "email": "Email: gujranwaladevelopmentauthority@gmail.com"},
    {"ser": "28", "department": "Directro General, Hyderabad Development Authority (HDA)", "phone": "Phone: 03324832293", "email": "Email: afshanrubabdmg@gmail.com"},
    {"ser": "29", "department": "Director General, Gwadar Development Authority (GDA)", "phone": "Phone: (086) 9201010, 4211775", "email": "Email: info@gda.gov.pk"},
    {"ser": "30", "department": "Director General, Punjab Housing & Town Planning Agency (PHATA)", "phone": "Phone: 092-42-99213418", "email": "Email: pa.dgphata@gmail.com"},
    {"ser": "31", "department": "Secretary, Public Health Engineering Department- KPK", "phone": "Phone: +92 91 9212849", "email": "Email: secretaryphed@gmail.com"},
    {"ser": "32", "department": "Secretary, Housing Urban Development & Public Health Engineering (HUD & PHED) PB", "phone": "Phone: +92-42-99212626-7", "email": "Email: hudnphed@gmail.com"},
    {"ser": "33", "department": "Seceratary Public Health Engineering Department Balochistan", "phone": "", "email": ""},
    {"ser": "34", "department": "Director General Public health engineering and Rural development Authority SD", "phone": "Phone: 02199205039", "email": "Email:  secy.phe@sindh.gov.pk"},
    {"ser": "35", "department": "Secretary, Sindh Education & Literacy Department", "phone": "Phone: (021)- 99211227, (021)99211238", "email": "Email:  se.seld@sindheducation.gov.pk"},
    {"ser": "36", "department": "Secretary, School Education Department PB", "phone": "Phone:", "email": "Email:  secyschools@punjab.gov.pk"},
    {"ser": "37", "department": "Secretary, Elementary & Secondary Education Department KPK", "phone": "Phone: 091-9210480", "email": "Email:  secretary.ese@kpese.gov.pk"},
    {"ser": "38", "department": "Secretary, Balochistan Education Department, BL", "phone": "Phone:", "email": "Email:  info@sed.gob.pk"},
    {"ser": "39", "department": "Director General, Provincial Housing Authority- KPK", "phone": "Phone: 091-9224298", "email": "Email:  info@kp.gov.pk"},
    {"ser": "40", "department": "Secretary, Communication & Works Department, KP", "phone": "Phone: 091-9214039", "email": "Email: cwd.gkp@gmail.com"},
    {"ser": "41", "department": "Secretary, Communication & Works Department, PB", "phone": "Phone: (042) 99210448", "email": "Email: asa.cnw@punjab.gov.pk"},
    {"ser": "42", "department": "Secretary, Works & Services Department, SD", "phone": "Phone: 021-99212992, 021-99218225", "email": "Email: secretarywsd.sindh@gmail.com"},
    {"ser": "43", "department": "Secretary, Communication works, Physical Planning and Housing Department (CWPP&H), Bl", "phone": "Phone (Sec office): 081-9202372", "email": "Email: cw@balochistan.gov.pk"},
    {"ser": "44", "department": "Secretary, Communications & Works Department State of AJK", "phone": "Phone: +92(582)-2920085", "email": "Email: info@cwd.gok.pk"},
    {"ser": "45", "department": "Secretary, Communications & Works Department GB", "phone": "Phone:", "email": "Email:"},
    {"ser": "Provincial Disaster Management Authorities", "department": "", "phone": "", "email": ""},
    {"ser": "46", "department": "Director General, PDMA, KPK", "phone": "Phone: 091 9219635, 091 9219636", "email": "Email: peoc.kp@pdma.gov.pk"},
    {"ser": "47", "department": "Director General, PDMA, Pb", "phone": "Phone: +924299204408", "email": "Email: pdma.gop@gmail.com"},
    {"ser": "48", "department": "Director General, PDMA, SD", "phone": "Phone: +92-21-35381810, +92-21-35314422", "email": "Email: Info@pdma.gos.pk"},
    {"ser": "49", "department": "Director General, PDMA, BL", "phone": "Phone: 92-81-9241118", "email": "Email: dgpdmagob@gmail.com"},
    {"ser": "50", "department": "Director General, SDMA, AJK", "phone": "Phone: +92-5822-921101", "email": "Email: info.sdma@gmail.com"},
    {"ser": "51", "department": "Director General, GBDMA, GB", "phone": "Phone:", "email": "Email: gbdmaofficial@gmail.com"},
    {"ser": "Military Departments", "department": "", "phone": "", "email": ""},
    {"ser": "52", "department": "E-in-C Branch, Rwp", "phone": "", "email": ""},
    {"ser": "53", "department": "Director General, Frontier Works Organization", "phone": "", "email": ""},
    {"ser": "54", "department": "Director General, National Logistic Cell", "phone": "", "email": ""},
    {"ser": "55", "department": "GSO-1, Engineers Directorate GHQ", "phone": "", "email": ""},
    {"ser": "56", "department": "Director General, Housing Directorate GHQ", "phone": "", "email": ""},
    {"ser": "Industry and Consultancies", "department": "", "phone": "", "email": ""},
    {"ser": "57", "department": "Chief Executive Officer (CEO), Meinhardt (Pakistan) Pvt. Ltd.", "phone": "Phone: +92-51-2273385-7", "email": "Email:   info@meinhardt.com.pk"},
    {"ser": "58", "department": "Chief Executive Officer (CEO), Designmen Consulting Engineers (Pvt.) Ltd.", "phone": "Phone: +92-51-2828577", "email": "Email: info@designmen.com.pk"},
    {"ser": "59", "department": "Chief Executive Officer (CEO), Structax Consultants (Pvt.) Ltd.", "phone": "Phone: +92 333 9912091", "email": "Email: ceo.structax@gmail.com"},
    {"ser": "60", "department": "Chief Executive Officer (CEO), EA Consulting (Pvt.) Ltd.", "phone": "Phone: 051-8229444", "email": "Email: eaisb@eaworld.com"},
    {"ser": "61", "department": "Aqrab Ali Rana, Chief Executive Officer, Green building council Islamabad", "phone": "", "email": ""},
    {"ser": "62", "department": "Mr. Hassan Abbas-  Chief Executive Officer, SKY 47", "phone": "", "email": ""},
    {"ser": "63", "department": "Chief Executive Officer (CEO), INN Consulting Engineers (Pvt.) Ltd.", "phone": "Phone: +92 334 5504517", "email": "Email: arslan.ghaara@gmail.com"},
    {"ser": "International Organizations", "department": "", "phone": "", "email": ""},
    {"ser": "64", "department": "Country Head, UN Habitat", "phone": "Phone: 92 51 835 7363, 92 51 835 5790", "email": "Email: faiqa.aziz@un.org (communication officer)"},
    {"ser": "65", "department": "Country Head, UNDP", "phone": "Phone: +92-51-835-5600", "email": "Email: communications.pk@undp.og"},
    {"ser": "66", "department": "Chief Executive, Officer Aga Khan Agency for Habitat-AKDN", "phone": "Phone: 051-111253254", "email": "Email:  nusrat.nasab@akdn.org"},
    {"ser": "67", "department": "Country Director, Asian Development Bank (ADB)", "phone": "Phone: (051) 2087300", "email": "Email:  mikhan@adb.org"},
    {"ser": "68", "department": "Country Director, World Bank", "phone": "Phone: (+92-51) 9090000", "email": "Email: mariamaltaf@worldbank.org"},
    {"ser": "Academia", "department": "", "phone": "", "email": ""},
    {"ser": "69", "department": "Principal SCEE NUST University", "phone": "Phone: +92-51-90854001", "email": "Email: pscee@nust.edu.pk,  registrar@nust.edu.pk"},
    {"ser": "70", "department": "Chairman, Dept. of Civil Engineering UET Taxila University.", "phone": "Phone: +92 51-9047-400", "email": "Email: registrar@uettaxila.edu.pk"},
    {"ser": "71", "department": "Chairman, Dept. of Civil Engineering, COMSATS University.", "phone": "Phone: (92-51) 9049 5215", "email": "Email: alich@comsats.edu.pk"},
    {"ser": "72", "department": "Chairman, Dept. of Civil Engineering, MUET University", "phone": "Phone: +92 22 2772254-72", "email": "Email: chairman.ce@admin.muet.edu.pk"},
    {"ser": "73", "department": "Chairman, Dept. of Civil Engineering, BUITEMS University", "phone": "Phone: +92 (81) 2899911 Ext. 730", "email": "Email: naik.muhammad@buitms.edu.pk"},
    {"ser": "74", "department": "Chairman, Dept. of Civil Engineering, Abasyn  University", "phone": "Phone:", "email": ""},
    {"ser": "75", "department": "Commandant (MCE), MCE NUST University.", "phone": "Phone:", "email": "Email: mce@nust.edu.pk"},
    {"ser": "Think Tank", "department": "", "phone": "", "email": ""},
    {"ser": "76", "department": "Dr. Abid Qaiyum Suleri,Executive Director,  Sustainable Dev Policy Institute (SDPI)", "phone": "", "email": ""},
    {"ser": "77", "department": "Mrs. Farzhana Naek, Chairman, Pakistan Red Crescent Society (PRCS)", "phone": "", "email": ""},
    {"ser": "78", "department": "Mr Aftab Alam Khan, Head, Resilient Futures International (RFI)", "phone": "", "email": ""},
    {"ser": "79", "department": "Dr. Salman Humayun, Head, Institute of Social and Policy Sciences", "phone": "", "email": ""},
    {"ser": "80", "department": "Mr. Kashif Hashmi, Director, Institute of Social and Policy Sciences", "phone": "", "email": ""},
    {"ser": "81", "department": "Imtiaz Gul, Executive Director, Senior Research Fellow, Centre for Research and Security Studies (CRSS)", "phone": "", "email": ""},
    {"ser": "82", "department": "Dr. Neelum Nigar, Director, Institute of Strategic Studies Islamabad", "phone": "", "email": ""},
    {"ser": "83", "department": "Lt. Gen. Majid Ehsan, HI(M) (Retd), President,  Islamabad Policy Research Institute", "phone": "", "email": ""},
    {"ser": "84", "department": "Mr. Khalid Rahman, Chairman,  Institute of Policy Studies", "phone": "", "email": ""},
    {"ser": "85", "department": "Dr. Khalil Ahmad, Head, Alternate Solutions Institute", "phone": "", "email": ""},
    {"ser": "86", "department": "Mr. Muhammad Arif Goheer, Executive Director, Global Climate Change Impact Studies Cen (GCISC)", "phone": "", "email": ""},
    {"ser": "87", "department": "Muhammad Badar Alam, CEO, Policy Research Institute for Equitable Dev (PRIED)", "phone": "", "email": ""},
    {"ser": "88", "department": "Dr. M. Aslam Baig, Secy Gen, Pak Academy of Sciences", "phone": "", "email": ""},
    {"ser": "89", "department": "Prof. Sayed Komail Tayebi", "phone": "", "email": ""},
    {"ser": "90", "department": "Prof. Sayed Komail Tayebi, President, ECO-Science Foundation", "phone": "", "email": ""},
    {"ser": "91", "department": "Dr. Muhammad Nadeem Javed, VC, PIDE Pak Institute of Dev Economics", "phone": "", "email": ""},
    {"ser": "92", "department": "Vice Admiral Ahmed Saeed HI(M), (Retd), President,Natl Institute of Maritime Affairs (NIMA)", "phone": "", "email": ""},
    {"ser": "93", "department": "Muhammad Mohsin Iqbal, DG research, National Assembly", "phone": "", "email": ""},
    {"ser": "94", "department": "Ms. Samina A. Hasan, ED, Natl Institute of Population Studies (NIPS)", "phone": "", "email": ""},
    {"ser": "95", "department": "Ms Sherin Naz PAS, DG, Agency for Barani Areas Development (ABAD)", "phone": "", "email": ""},
    {"ser": "96", "department": "Dr. Tehsin Naqvi, HOD, QAU Defence and Strategic Studies", "phone": "", "email": ""},
    {"ser": "97", "department": "Syed Mahmood Nasir, DG, Global Climate-Change Impact Studies Centre", "phone": "", "email": ""},
    {"ser": "98", "department": "Mr. Younas Khan, DG, KP Forest Affair", "phone": "", "email": ""},
    {"ser": "99", "department": "Dr. Atia Ali Kazmi, DG, ISSRA, NDU", "phone": "", "email": ""},
    {"ser": "100", "department": "Mr. Talat Shabir, Director, Institute of Strategic Studies", "phone": "", "email": ""},
    {"ser": "101", "department": "Mr. Israr Mohammad Khan, DG, AHK-NCRD", "phone": "", "email": ""},
    {"ser": "102", "department": "Dr. Muhammad Shahid Soroya, DG, Pakistan institute of Education", "phone": "", "email": ""},
    {"ser": "103", "department": "Mr. Salman Zaidi, Director, Jinnah Institute", "phone": "", "email": ""},
    {"ser": "104", "department": "Syed Mustehsan Rasool, Director, Jinnah Institute", "phone": "", "email": ""},
    {"ser": "105", "department": "Amb Sarwar Naqvi, Executive Director, Centre for International Strategic Studies (CISS)", "phone": "", "email": ""},
    {"ser": "106", "department": "Engr Javed Mahmood Bukhari, Patron in Chief, NUST Institute of Policy Studies (NIPS)", "phone": "", "email": ""},
];

const ADDED_ENTRIES_STORAGE_KEY = "stakeholderAddedEntries";
const EDITED_ENTRIES_STORAGE_KEY = "stakeholderEditedEntries";

function isPrimaryHeading(row) {
    const isNumber = /^\d+$/.test(String(row.ser).trim());
    return !isNumber && row.department === "" && row.phone === "" && row.email === "";
}

function buildGroups(data) {
    const groups = [];
    let currentGroup = null;

    data.forEach((row) => {
        if (isPrimaryHeading(row)) {
            currentGroup = {
                title: row.ser,
                items: []
            };
            groups.push(currentGroup);
            return;
        }

        if (currentGroup) {
            currentGroup.items.push(row);
        }
    });

    return groups;
}

function appendCell(row, text, label) {
    const cell = document.createElement("td");
    cell.textContent = text;
    cell.setAttribute("data-label", label);
    row.appendChild(cell);
}

function getEntryId(groupTitle, item) {
    return `${groupTitle}::${item.ser}::${item.department}`;
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function groupEntriesBySection(entries) {
    const sectionMap = new Map();

    entries.forEach((entry) => {
        if (!sectionMap.has(entry.section)) {
            sectionMap.set(entry.section, []);
        }

        sectionMap.get(entry.section).push(entry);
    });

    function compareSerials(a, b) {
        const serialA = Number.parseInt(String(a.ser).trim(), 10);
        const serialB = Number.parseInt(String(b.ser).trim(), 10);
        const aIsNumber = Number.isFinite(serialA);
        const bIsNumber = Number.isFinite(serialB);

        if (aIsNumber && bIsNumber) {
            return serialA - serialB;
        }

        if (aIsNumber) {
            return -1;
        }

        if (bIsNumber) {
            return 1;
        }

        return String(a.ser).localeCompare(String(b.ser), undefined, { numeric: true, sensitivity: "base" });
    }

    return Array.from(sectionMap, ([section, items]) => ({
        section,
        items: [...items].sort(compareSerials)
    }));
}

function buildExportTableHtml(entries, formatTitle) {
    const generatedOn = new Date().toLocaleString();
    const groupedEntries = groupEntriesBySection(entries);
    const rows = groupedEntries.map((group) => {
        const sectionRow = `
            <tr class="section-row">
                <td colspan="4">Section: ${escapeHtml(group.section)}</td>
            </tr>
        `;

        const itemRows = group.items.map((entry) => `
            <tr>
                <td>${escapeHtml(entry.ser)}</td>
                <td>${escapeHtml(entry.department)}</td>
                <td>${escapeHtml(entry.phone)}</td>
                <td>${escapeHtml(entry.email)}</td>
            </tr>
        `).join("");

        return `${sectionRow}${itemRows}`;
    }).join("");

    return `
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Calibri, Arial, sans-serif; color: #1b2d4c; margin: 24px; }
                .header { background: #1e5ea6; color: #fff; padding: 16px 18px; border-radius: 8px; margin-bottom: 16px; }
                .title { font-size: 24px; font-weight: 700; margin: 0 0 6px; }
                .sub { font-size: 14px; margin: 0; opacity: 0.95; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #c9d7eb; padding: 8px 10px; vertical-align: top; }
                th { background: #eaf2fb; color: #1f4f87; text-align: left; font-weight: 700; }
                .section-row td { background: #dfeeff; color: #1f4f87; font-weight: 700; }
                tr:nth-child(even) td { background: #f8fbff; }
            </style>
        </head>
        <body>
            <div class="header">
                <p class="title">Stakeholder Inventory Portal</p>
                <p class="sub">${escapeHtml(formatTitle)} | Generated on: ${escapeHtml(generatedOn)}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Ser.</th>
                        <th>Department</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </body>
        </html>
    `;
}

function downloadBlob(content, mimeType, filename) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
}

function getDetailRowDisplayValue() {
    return window.matchMedia("(max-width: 768px)").matches ? "block" : "table-row";
}

function renderAccordionTable(groups, expandAll = false, options = {}) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    const selectionMode = Boolean(options.selectionMode);
    const selectedEntryIds = options.selectedEntryIds instanceof Set ? options.selectedEntryIds : new Set();
    const editedSerials = options.editedSerials instanceof Set ? options.editedSerials : new Set();

    if (groups.length === 0) {
        const noRow = document.createElement("tr");
        const noCell = document.createElement("td");
        noCell.colSpan = 4;
        noCell.className = "no-results";
        noCell.textContent = "No matching departments found.";
        noRow.appendChild(noCell);
        tableBody.appendChild(noRow);
        return;
    }

    groups.forEach((group, groupIndex) => {
        const headingRow = document.createElement("tr");
        headingRow.className = "group-row";
        headingRow.dataset.group = String(groupIndex);
        if (expandAll) {
            headingRow.classList.add("expanded");
        }

        const serCell = document.createElement("td");
        serCell.className = "group-ser";
        serCell.innerHTML = `
            <button type="button" class="expand-btn" aria-label="Toggle section">
                <span class="toggle-icon">${expandAll ? "−" : "+"}</span>
            </button>
            <span class="group-number">${groupIndex + 1}.</span>
        `;
        headingRow.appendChild(serCell);

        const departmentCell = document.createElement("td");
        departmentCell.className = "group-department";
        departmentCell.textContent = group.title;
        headingRow.appendChild(departmentCell);

        const phoneCell = document.createElement("td");
        phoneCell.className = "group-placeholder";
        phoneCell.textContent = "";
        headingRow.appendChild(phoneCell);

        const emailCell = document.createElement("td");
        emailCell.className = "group-chevron";
        emailCell.innerHTML = `<span class="chevron-icon">⌄</span>`;
        headingRow.appendChild(emailCell);

        tableBody.appendChild(headingRow);

        group.items.forEach((item) => {
            const detailRow = document.createElement("tr");
            detailRow.className = "detail-row";
            detailRow.dataset.group = String(groupIndex);
            detailRow.style.display = expandAll ? getDetailRowDisplayValue() : "none";
            const entryId = getEntryId(group.title, item);
            detailRow.dataset.entryId = entryId;
            detailRow.dataset.entrySection = group.title;
            detailRow.dataset.entrySer = String(item.ser);
            const isEdited = editedSerials.has(String(item.ser));

            if (selectionMode) {
                detailRow.classList.add("selectable-entry");
                const selectedClass = selectedEntryIds.has(entryId);
                detailRow.classList.toggle("is-selected", selectedClass);
                detailRow.classList.toggle("is-edited", isEdited);

                const serCell = document.createElement("td");
                serCell.setAttribute("data-label", "Ser.");
                serCell.innerHTML = `
                    <label class="entry-select-wrap">
                        <input type="checkbox" class="select-entry-checkbox" data-entry-id="${entryId}" ${selectedClass ? "checked" : ""}>
                        <span>${item.ser}</span>
                        ${isEdited ? '<span class="edited-badge">Edited</span>' : ""}
                    </label>
                `;
                detailRow.appendChild(serCell);
            } else {
                const serCell = document.createElement("td");
                serCell.setAttribute("data-label", "Ser.");
                serCell.innerHTML = `
                    <span class="entry-action-cell">
                        <span>${item.ser}</span>
                        ${isEdited ? '<span class="edited-badge">Edited</span>' : ""}
                        <button type="button" class="edit-entry-button" data-entry-ser="${item.ser}" aria-label="Edit entry">Edit</button>
                    </span>
                `;
                detailRow.appendChild(serCell);
                detailRow.classList.toggle("is-edited", isEdited);
            }

            appendCell(detailRow, item.department, "Department");
            appendCell(detailRow, item.phone, "Phone");
            appendCell(detailRow, item.email, "Email");

            tableBody.appendChild(detailRow);
        });
    });
}

function toggleGroup(groupRow) {
    const tableBody = document.getElementById("tableBody");
    const groupId = groupRow.dataset.group;
    const isExpanded = groupRow.classList.contains("expanded");
    const detailRows = tableBody.querySelectorAll(`.detail-row[data-group="${groupId}"]`);
    const icon = groupRow.querySelector(".toggle-icon");

    groupRow.classList.toggle("expanded", !isExpanded);
    detailRows.forEach((row) => {
        row.style.display = isExpanded ? "none" : getDetailRowDisplayValue();
    });

    if (icon) {
        icon.textContent = isExpanded ? "+" : "−";
    }
}

function matchesQuery(item, query) {
    const searchableText = `${item.department} ${item.phone} ${item.email}`.toLowerCase();
    return searchableText.includes(query);
}

function filterGroups(groups, query) {
    return groups
        .map((group) => {
            const matchedItems = group.items.filter((item) => matchesQuery(item, query));
            return {
                title: group.title,
                items: matchedItems
            };
        })
        .filter((group) => group.items.length > 0);
}

function getNextSerialNumber(groups) {
    const maxNumber = groups
        .flatMap((group) => group.items)
        .map((item) => Number.parseInt(String(item.ser).trim(), 10))
        .filter((value) => Number.isFinite(value))
        .reduce((max, value) => Math.max(max, value), 0);

    return maxNumber + 1;
}

function populateSectionOptions(selectElement, groups) {
    selectElement.innerHTML = "";
    groups.forEach((group) => {
        const option = document.createElement("option");
        option.value = group.title;
        option.textContent = group.title;
        selectElement.appendChild(option);
    });
}

function getSelectedEntries(groups, selectedEntryIds) {
    const selected = [];

    groups.forEach((group) => {
        group.items.forEach((item) => {
            const entryId = getEntryId(group.title, item);
            if (!selectedEntryIds.has(entryId)) {
                return;
            }

            selected.push({
                ser: item.ser,
                section: group.title,
                department: item.department,
                phone: item.phone,
                email: item.email
            });
        });
    });

    return selected;
}

function generateSelectedEntriesPdf(entries) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        window.alert("PDF library failed to load. Please refresh and try again.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFillColor(16, 74, 140);
    doc.rect(0, 0, pageWidth, 86, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Stakeholder Inventory Portal", 40, 38);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Selected Department Entries Report", 40, 58);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, pageWidth - 300, 58);

    const groupedEntries = groupEntriesBySection(entries);
    const tableRows = [];

    groupedEntries.forEach((group) => {
        tableRows.push([
            {
                content: `Section: ${group.section}`,
                colSpan: 4,
                styles: {
                    fillColor: [223, 238, 255],
                    textColor: [31, 79, 135],
                    fontStyle: "bold"
                }
            }
        ]);

        group.items.forEach((entry) => {
            tableRows.push([
                entry.ser,
                entry.department,
                entry.phone,
                entry.email
            ]);
        });
    });

    doc.autoTable({
        startY: 102,
        head: [["Ser.", "Department", "Phone", "Email"]],
        body: tableRows,
        margin: { left: 24, right: 24 },
        styles: {
            font: "helvetica",
            fontSize: 9,
            cellPadding: 7,
            textColor: [28, 42, 65],
            lineColor: [203, 216, 234],
            lineWidth: 0.5,
            overflow: "linebreak"
        },
        headStyles: {
            fillColor: [30, 93, 166],
            textColor: [255, 255, 255],
            fontStyle: "bold",
            halign: "center"
        },
        alternateRowStyles: {
            fillColor: [247, 251, 255]
        },
        columnStyles: {
            0: { cellWidth: 48, halign: "center" },
            1: { cellWidth: 290 },
            2: { cellWidth: 190 },
            3: { cellWidth: 190 }
        },
        didDrawPage: (data) => {
            doc.setFontSize(9);
            doc.setTextColor(90, 108, 134);
            doc.text(
                `Page ${doc.internal.getNumberOfPages()}`,
                pageWidth - 70,
                doc.internal.pageSize.getHeight() - 14
            );
        }
    });

    doc.save(`stakeholder-selected-entries-${Date.now()}.pdf`);
}

function generateSelectedEntriesWord(entries) {
    const html = buildExportTableHtml(entries, "Selected Entries - Word Export");
    downloadBlob(html, "application/msword", `stakeholder-selected-entries-${Date.now()}.doc`);
}

function generateSelectedEntriesExcel(entries) {
    const html = buildExportTableHtml(entries, "Selected Entries - Excel Export");
    downloadBlob(html, "application/vnd.ms-excel", `stakeholder-selected-entries-${Date.now()}.xls`);
}

function loadPersistedEntries() {
    try {
        const rawData = window.localStorage.getItem(ADDED_ENTRIES_STORAGE_KEY);
        if (!rawData) {
            return [];
        }

        const parsed = JSON.parse(rawData);
        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.filter((entry) =>
            entry
            && typeof entry.sectionTitle === "string"
            && typeof entry.department === "string"
            && typeof entry.phone === "string"
            && typeof entry.email === "string"
        );
    } catch (error) {
        return [];
    }
}

function loadEditedEntries() {
    try {
        const rawData = window.localStorage.getItem(EDITED_ENTRIES_STORAGE_KEY);
        if (!rawData) {
            return [];
        }

        const parsed = JSON.parse(rawData);
        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.filter((entry) =>
            entry
            && typeof entry.ser === "string"
            && typeof entry.sectionTitle === "string"
            && typeof entry.department === "string"
            && typeof entry.phone === "string"
            && typeof entry.email === "string"
        );
    } catch (error) {
        return [];
    }
}

function savePersistedEntries(entries) {
    try {
        window.localStorage.setItem(ADDED_ENTRIES_STORAGE_KEY, JSON.stringify(entries));
    } catch (error) {
        console.warn("Unable to persist added entries.", error);
    }
}

function saveEditedEntries(entries) {
    try {
        window.localStorage.setItem(EDITED_ENTRIES_STORAGE_KEY, JSON.stringify(entries));
    } catch (error) {
        console.warn("Unable to persist edited entries.", error);
    }
}

function applyPersistedEntries(groups, persistedEntries) {
    persistedEntries.forEach((entry) => {
        const targetGroupIndex = groups.findIndex((group) => group.title === entry.sectionTitle);
        if (targetGroupIndex === -1) {
            return;
        }

        const serialNumber = (typeof entry.ser === "string" && entry.ser.trim())
            ? entry.ser.trim()
            : String(getNextSerialNumber(groups));

        groups[targetGroupIndex].items.push({
            ser: serialNumber,
            department: entry.department,
            phone: entry.phone,
            email: entry.email
        });
    });
}

function findEntryBySer(groups, serialNumber) {
    for (let groupIndex = 0; groupIndex < groups.length; groupIndex += 1) {
        const itemIndex = groups[groupIndex].items.findIndex((item) => String(item.ser) === String(serialNumber));
        if (itemIndex !== -1) {
            return { groupIndex, itemIndex };
        }
    }

    return null;
}

function applyEditedEntries(groups, editedEntries) {
    editedEntries.forEach((editedEntry) => {
        const found = findEntryBySer(groups, editedEntry.ser);
        if (!found) {
            return;
        }

        const sourceGroup = groups[found.groupIndex];
        const originalItem = sourceGroup.items[found.itemIndex];
        const targetGroupIndex = groups.findIndex((group) => group.title === editedEntry.sectionTitle);
        if (targetGroupIndex === -1) {
            return;
        }

        const updatedItem = {
            ser: originalItem.ser,
            department: editedEntry.department,
            phone: editedEntry.phone,
            email: editedEntry.email
        };

        sourceGroup.items.splice(found.itemIndex, 1);
        groups[targetGroupIndex].items.push(updatedItem);
    });
}

function updateSearchStatus(query, groups) {
    const status = document.getElementById("searchStatus");
    if (!query) {
        status.textContent = "";
        return;
    }

    const totalDepartments = groups.reduce((sum, group) => sum + group.items.length, 0);
    status.textContent = `Found ${totalDepartments} department(s) in ${groups.length} section(s).`;
}

window.onload = function() {
    let groupedData = buildGroups(stakeholders);
    const persistedEntries = loadPersistedEntries();
    applyPersistedEntries(groupedData, persistedEntries);
    const persistedEdits = loadEditedEntries();
    applyEditedEntries(groupedData, persistedEdits);

    const tableBody = document.getElementById("tableBody");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resetButton = document.getElementById("resetButton");
    const addEntryToggle = document.getElementById("addEntryToggle");
    const addEntryPanel = document.getElementById("addEntryPanel");
    const addEntryForm = document.getElementById("addEntryForm");
    const saveEntryButton = document.getElementById("saveEntryButton");
    const entryPanelTitle = document.getElementById("entryPanelTitle");
    const sectionSelect = document.getElementById("sectionSelect");
    const departmentInput = document.getElementById("departmentInput");
    const phoneInput = document.getElementById("phoneInput");
    const emailInput = document.getElementById("emailInput");
    const cancelEntryButton = document.getElementById("cancelEntryButton");
    const exportPdfToggle = document.getElementById("exportPdfToggle");
    const pdfSelectionPanel = document.getElementById("pdfSelectionPanel");
    const pdfSelectionStatus = document.getElementById("pdfSelectionStatus");
    const generatePdfButton = document.getElementById("generatePdfButton");
    const generateWordButton = document.getElementById("generateWordButton");
    const generateExcelButton = document.getElementById("generateExcelButton");
    const cancelPdfSelection = document.getElementById("cancelPdfSelection");
    const selectAllEntries = document.getElementById("selectAllEntries");
    const selectVisibleEntries = document.getElementById("selectVisibleEntries");
    const clearAllEntries = document.getElementById("clearAllEntries");

    const addedEntries = [...persistedEntries];
    const editedEntries = [...persistedEdits];
    const selectedEntryIds = new Set();
    let isSelectionMode = false;
    let editingEntrySerial = null;

    function updatePdfSelectionStatus() {
        const selectedCount = selectedEntryIds.size;
        pdfSelectionStatus.textContent = selectedCount > 0
            ? `${selectedCount} entr${selectedCount === 1 ? "y" : "ies"} selected for export.`
            : "Select entries from the table to generate export documents.";
        generatePdfButton.disabled = selectedCount === 0;
        generateWordButton.disabled = selectedCount === 0;
        generateExcelButton.disabled = selectedCount === 0;
    }

    function getGroupsByCurrentQuery() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            return groupedData;
        }

        return filterGroups(groupedData, query);
    }

    function renderActiveView() {
        const query = searchInput.value.trim().toLowerCase();
        const visibleGroups = getGroupsByCurrentQuery();
        const editedSerials = new Set(editedEntries.map((entry) => String(entry.ser)));

        if (isSelectionMode) {
            renderAccordionTable(visibleGroups, true, { selectionMode: true, selectedEntryIds, editedSerials });
            updateSearchStatus(query, visibleGroups);
            return;
        }

        if (!query) {
            renderAccordionTable(groupedData, false, { editedSerials });
            updateSearchStatus("", groupedData);
            return;
        }

        const filteredGroups = filterGroups(groupedData, query);
        renderAccordionTable(filteredGroups, true, { editedSerials });
        updateSearchStatus(query, filteredGroups);
    }

    function setSelectionMode(enabled) {
        isSelectionMode = enabled;
        pdfSelectionPanel.hidden = !enabled;
        exportPdfToggle.textContent = enabled ? "Selecting..." : "Export PDF";
        if (enabled) {
            selectedEntryIds.clear();
        }
        updatePdfSelectionStatus();
        renderActiveView();
    }

    function selectAllAvailableEntries() {
        selectedEntryIds.clear();
        groupedData.forEach((group) => {
            group.items.forEach((item) => {
                selectedEntryIds.add(getEntryId(group.title, item));
            });
        });

        updatePdfSelectionStatus();
        renderActiveView();
    }

    function clearEntrySelection() {
        selectedEntryIds.clear();
        updatePdfSelectionStatus();
        renderActiveView();
    }

    function selectVisibleEntriesOnly() {
        const visibleGroups = getGroupsByCurrentQuery();
        visibleGroups.forEach((group) => {
            group.items.forEach((item) => {
                selectedEntryIds.add(getEntryId(group.title, item));
            });
        });

        updatePdfSelectionStatus();
        renderActiveView();
    }

    renderActiveView();
    populateSectionOptions(sectionSelect, groupedData);

    tableBody.addEventListener("click", (event) => {
        const checkbox = event.target.closest(".select-entry-checkbox");
        if (checkbox) {
            return;
        }

        const editButton = event.target.closest(".edit-entry-button");
        if (editButton) {
            const detailRow = editButton.closest(".detail-row");
            if (!detailRow) {
                return;
            }

            const entrySer = detailRow.dataset.entrySer;
            const entrySection = detailRow.dataset.entrySection;
            if (!entrySer || !entrySection) {
                return;
            }

            const found = findEntryBySer(groupedData, entrySer);
            if (!found) {
                return;
            }

            const currentItem = groupedData[found.groupIndex].items[found.itemIndex];
            editingEntrySerial = String(entrySer);
            populateSectionOptions(sectionSelect, groupedData);
            sectionSelect.value = entrySection;
            departmentInput.value = currentItem.department;
            phoneInput.value = currentItem.phone;
            emailInput.value = currentItem.email;

            entryPanelTitle.textContent = "Edit Department Entry";
            saveEntryButton.textContent = "Update Entry";
            setEntryPanelVisibility(true);
            return;
        }

        const groupRow = event.target.closest(".group-row");
        if (!groupRow) {
            return;
        }
        toggleGroup(groupRow);
    });

    tableBody.addEventListener("change", (event) => {
        const checkbox = event.target.closest(".select-entry-checkbox");
        if (!checkbox) {
            return;
        }

        const entryId = checkbox.dataset.entryId;
        if (!entryId) {
            return;
        }

        if (checkbox.checked) {
            selectedEntryIds.add(entryId);
        } else {
            selectedEntryIds.delete(entryId);
        }

        const detailRow = checkbox.closest(".detail-row");
        if (detailRow) {
            detailRow.classList.toggle("is-selected", checkbox.checked);
        }

        updatePdfSelectionStatus();
    });

    function applySearch() {
        renderActiveView();
    }

    searchButton.addEventListener("click", applySearch);
    resetButton.addEventListener("click", () => {
        if (isSelectionMode) {
            setSelectionMode(false);
        }

        searchInput.value = "";
        renderAccordionTable(groupedData, false);
        updateSearchStatus("", groupedData);
        searchInput.focus();
    });

    exportPdfToggle.addEventListener("click", () => {
        if (!isSelectionMode) {
            setSelectionMode(true);
            return;
        }

        const selectedEntries = getSelectedEntries(groupedData, selectedEntryIds);
        if (!selectedEntries.length) {
            window.alert("Select at least one entry to generate PDF.");
            return;
        }

        generateSelectedEntriesPdf(selectedEntries);
    });

    cancelPdfSelection.addEventListener("click", () => {
        setSelectionMode(false);
    });

    selectAllEntries.addEventListener("click", () => {
        if (!isSelectionMode) {
            return;
        }
        selectAllAvailableEntries();
    });

    clearAllEntries.addEventListener("click", () => {
        if (!isSelectionMode) {
            return;
        }
        clearEntrySelection();
    });

    selectVisibleEntries.addEventListener("click", () => {
        if (!isSelectionMode) {
            return;
        }
        selectVisibleEntriesOnly();
    });

    generatePdfButton.addEventListener("click", () => {
        const selectedEntries = getSelectedEntries(groupedData, selectedEntryIds);
        if (!selectedEntries.length) {
            return;
        }

        generateSelectedEntriesPdf(selectedEntries);
    });

    generateWordButton.addEventListener("click", () => {
        const selectedEntries = getSelectedEntries(groupedData, selectedEntryIds);
        if (!selectedEntries.length) {
            return;
        }

        generateSelectedEntriesWord(selectedEntries);
    });

    generateExcelButton.addEventListener("click", () => {
        const selectedEntries = getSelectedEntries(groupedData, selectedEntryIds);
        if (!selectedEntries.length) {
            return;
        }

        generateSelectedEntriesExcel(selectedEntries);
    });

    function setEntryPanelVisibility(visible) {
        addEntryPanel.hidden = !visible;
        if (visible) {
            addEntryToggle.textContent = "Close Entry";
            if (!sectionSelect.options.length) {
                populateSectionOptions(sectionSelect, groupedData);
            }
            departmentInput.focus();
            return;
        }

        addEntryToggle.textContent = "Add Entry";
        editingEntrySerial = null;
        entryPanelTitle.textContent = "Add Department Entry";
        saveEntryButton.textContent = "Save Entry";
        addEntryForm.reset();
        if (sectionSelect.options.length > 0) {
            sectionSelect.selectedIndex = 0;
        }
    }

    addEntryToggle.addEventListener("click", () => {
        setEntryPanelVisibility(addEntryPanel.hidden);
    });

    cancelEntryButton.addEventListener("click", () => {
        setEntryPanelVisibility(false);
    });

    addEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const selectedSection = sectionSelect.value.trim();
        const department = departmentInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();

        if (!selectedSection || !department || !phone || !email) {
            return;
        }

        const targetGroupIndex = groupedData.findIndex((group) => group.title === selectedSection);
        if (targetGroupIndex === -1) {
            return;
        }

        let targetSerialForScroll = null;

        if (editingEntrySerial) {
            const found = findEntryBySer(groupedData, editingEntrySerial);
            if (!found) {
                return;
            }

            const sourceGroup = groupedData[found.groupIndex];
            const originalItem = sourceGroup.items[found.itemIndex];
            const updatedItem = {
                ser: originalItem.ser,
                department,
                phone,
                email
            };

            sourceGroup.items.splice(found.itemIndex, 1);
            groupedData[targetGroupIndex].items.push(updatedItem);
            targetSerialForScroll = String(updatedItem.ser);

            const editRecord = {
                ser: String(updatedItem.ser),
                sectionTitle: selectedSection,
                department,
                phone,
                email
            };

            const existingEditIndex = editedEntries.findIndex((entry) => entry.ser === editRecord.ser);
            if (existingEditIndex === -1) {
                editedEntries.push(editRecord);
            } else {
                editedEntries[existingEditIndex] = editRecord;
            }
            saveEditedEntries(editedEntries);

            const persistedAddedIndex = addedEntries.findIndex((entry) => entry.ser === String(updatedItem.ser));
            if (persistedAddedIndex !== -1) {
                addedEntries[persistedAddedIndex] = {
                    sectionTitle: selectedSection,
                    ser: String(updatedItem.ser),
                    department,
                    phone,
                    email
                };
                savePersistedEntries(addedEntries);
            }
        } else {
            const newEntry = {
                ser: String(getNextSerialNumber(groupedData)),
                department,
                phone,
                email
            };

            groupedData[targetGroupIndex].items.push(newEntry);
            addedEntries.push({
                sectionTitle: selectedSection,
                ser: newEntry.ser,
                department,
                phone,
                email
            });
            savePersistedEntries(addedEntries);
            targetSerialForScroll = String(newEntry.ser);
        }

        searchInput.value = "";
        renderActiveView();

        if (!isSelectionMode) {
            const targetGroupRow = tableBody.querySelector(`.group-row[data-group="${targetGroupIndex}"]`);
            if (targetGroupRow) {
                toggleGroup(targetGroupRow);
                targetGroupRow.scrollIntoView({ behavior: "smooth", block: "center" });
            }

            if (targetSerialForScroll) {
                const targetRow = Array.from(tableBody.querySelectorAll(".detail-row")).find(
                    (row) => row.dataset.entrySer === targetSerialForScroll
                );
                if (targetRow) {
                    targetRow.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }
        }

        setEntryPanelVisibility(false);
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            applySearch();
        }
    });

    window.addEventListener("resize", () => {
        const displayMode = getDetailRowDisplayValue();
        const expandedGroups = new Set(
            Array.from(tableBody.querySelectorAll(".group-row.expanded")).map((row) => row.dataset.group)
        );

        tableBody.querySelectorAll(".detail-row").forEach((row) => {
            row.style.display = expandedGroups.has(row.dataset.group) ? displayMode : "none";
        });
    });
};
