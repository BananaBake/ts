function displayProject(url, svg, pname, description) {
  const projects = document.getElementById("projects");
  const newEle = document.createElement('div');
  newEle.innerHTML = `
    <div class="o" onclick="window.location.href='${url}';">
      <table>
        <tr>
          <td>
${
    //svg
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-267.692 107.692-480 320-692.308l28.539 28.539-184 184L348.308-296 320-267.692Zm320 0-28.539-28.539 184-184L611.692-664 640-692.308 852.308-480 640-267.692Z"/></svg>'}
          </td>
          <td>
            <h2>${pname}</h2>
            <p>
              ${description}
            </p>
          </td>
        </tr>
      </table>
    </div>
    `;
  projects.appendChild(newEle);
}

// Example usage with arguments
displayProject('http://example.com', '', 'Project Name', 'Project Description');

function displayProjects() {
  const projects = document.getElementById("projects");
  const allProjects = [
    { url: 'http://example.com', svg: '', pname: 'Project Name', description: 'Project Description' },
    { url: 'http://example.com', svg: '', pname: 'Project Name', description: 'Project Description' },
    { url: 'http://example.com', svg: '', pname: 'Project Name', description: 'Project Description' }
    // Add more projects as needed
  ];
  allProjects.forEach(project => {
    displayProject(
      project.url,
      project.svg,
      project.pname,
      project.description
    );
  });
}

displayProjects();

// display create new project popup
function popup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";

}