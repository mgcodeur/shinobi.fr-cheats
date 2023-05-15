javascript:(function () {
    const pageIsReady = ['interactive', 'complete'].includes(document.readyState);
    const pageIsLoading = ['loading'].includes(document.readyState);
    
    let chasseBtn = document.querySelector('a[href="index.php?page=moteur_ext_chasse"]');
    const currentUrl = window.location.href;

    const battleUrl = [
        'https://www.shinobi.fr/index.php?page=moteur_ext_chasse', 
        'https://www.shinobi.fr/index.php?page=moteur_combat_m'
    ];

    const pressKey = (key) => {
        const event = new KeyboardEvent('keydown', {
            key: key,
            keyCode: key.charCodeAt(0),
            code: 'Key' + key.toUpperCase(),
            which: key.charCodeAt(0),
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
        });
        document.dispatchEvent(event);
    };

    const fightLeaveBtn = document.querySelector('.button-fight-leave');

    if(
        !pageIsReady || 
        pageIsLoading
    ) return false;

    if(
        battleUrl.includes(currentUrl) && 
        !fightLeaveBtn
    ) {
        pressKey('a');
        return false;
    }

    if(
        chasseBtn 
    ) {
        chasseBtn.removeAttribute('onclick');
        chasseBtn.click();
        chasseBtn.remove();
        return false;
    };

    if(
        fightLeaveBtn
    ) {
        fightLeaveBtn.querySelector('input').click();
        fightLeaveBtn.remove();
        return false;
    }
}());