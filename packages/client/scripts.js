let currentParentId = '';

function showPopup(name, bio, photo, parentId) {
    document.getElementById('member-name').textContent = name;
    document.getElementById('member-bio').textContent = bio;
    document.getElementById('member-photo').src = photo;
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';

    currentParentId = parentId;

    // Afficher la liste des enfants sous forme de boutons dans l'onglet "Enfants"
    const childrenList = document.getElementById('children-list');
    childrenList.innerHTML = ''; // Vider la liste actuelle
    const children = document.getElementById(parentId).children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].nodeName.toLowerCase() === 'li') {
            const childName = children[i].querySelector('div').textContent;
            const childButton = document.createElement('button');
            childButton.className = 'child-button';
            childButton.textContent = childName;
            childButton.onclick = function () {
                showChildBio(childName, `${childName} bio...`, '');
            };
            childrenList.appendChild(childButton);
        }
    }
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function addChild() {
    const childName = prompt("Entrez le nom de l'enfant :");
    if (childName && currentParentId) {
        const newChild = document.createElement('li');
        newChild.innerHTML = `<div onclick="showPopup('${childName}', '${childName} bio...', '')">${childName}</div>`;
        document.getElementById(currentParentId).appendChild(newChild);

        // Ajouter l'enfant sous forme de bouton dans l'onglet "Enfants"
        const childButton = document.createElement('button');
        childButton.className = 'child-button';
        childButton.textContent = childName;
        childButton.onclick = function () {
            showChildBio(childName, `${childName} bio...`, '');
        };
        document.getElementById('children-list').appendChild(childButton);
    }
}

function showChildBio(name, bio, photo) {
    // Cette fonction affiche une alerte avec la bio, mais pourrait être améliorée pour afficher une autre popup
    alert(`Nom: ${name}\nBio: ${bio}`);
}
