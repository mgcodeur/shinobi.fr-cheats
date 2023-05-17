javascript:(function() {
    const btnBattleStart = document.querySelector('[href="index.php?page=moteur_combat"]');
    const fightLeaveBtn = document.querySelector('.button-fight-leave');
    const pageIsReady = ['interactive', 'complete'].includes(document.readyState);
    const pageIsLoading = ['loading'].includes(document.readyState);

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

    if(
        !pageIsReady || 
        pageIsLoading
    ) return false;

    if(btnBattleStart) {
        btnBattleStart.removeAttribute('onclick');
        btnBattleStart.click();
        btnBattleStart.remove();
        return false;
    }

    if(!fightLeaveBtn) {
        pressKey('a');
        return false;
    }

    if(fightLeaveBtn) {
        fightLeaveBtn.querySelector('input').click();
        fightLeaveBtn.remove();
        return false;
    }
}())