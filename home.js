function displayProject(url, svg, pname, description) {
    const projects = document.getElementById("projects");
    const newEle = document.createElement('div');
    newEle.innerHTML = `
    <div class="o" onclick="window.location.href='${url}';">
      <table>
        <tr>
          <td>
            ${svg}
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
displayProject('http://example.com', '<svg></svg>', 'Project Name', 'Project Description');