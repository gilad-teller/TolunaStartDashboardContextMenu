function createBadge() {
    const badge = document.createElement('span');
    badge.textContent = 'New Build';
    badge.style.cssText = 'display:inline-block;margin-left:8px;padding:2px 8px;font-size:11px;font-weight:600;color:#fff;background-color:#0078d4;border-radius:12px;vertical-align:middle;';
    return badge;
}

function addNewBuildBadges() {

    //My Projects page
    const tableCells = document.querySelectorAll('div[data-aut="TS-Projects_SurveyDescriptionWrapper"]');

    tableCells.forEach((wrapper) => {
        const link = wrapper.querySelector('a[data-aut="TS-Projects_SurveyTitleLink"]');
        if (!link) return;

        const surveyType = wrapper.querySelector('div[data-aut="TS-Projects_SurveyType"]');
        if (!surveyType) return;

        if (!surveyType.dataset.wizardMarked) {
            surveyType.appendChild(createBadge());
            surveyType.dataset.wizardMarked = "true";
        }
    });

    //Dashboard page
    const tiles = document.querySelectorAll('a[data-aut="TS-Projects_SurveyTileLink"]');

    tiles.forEach((tile) => {
        const tileType = tile.querySelector('div[data-aut="TS-Projects_SurveyTileType"]');
        if (!tileType) return;

        if (!tileType.dataset.wizardMarked) {
            tileType.appendChild(createBadge());
            tileType.dataset.wizardMarked = "true";
        }
    });
}

// Run on initial load
addNewBuildBadges();

// Observe DOM changes to handle dynamically loaded content
const observer = new MutationObserver(addNewBuildBadges);
observer.observe(document.body, { childList: true, subtree: true });
