export const loadedApp = () => {
    window.document.dispatchEvent(
        new CustomEvent("loadedApp", {
            detail: {
                loaded: true,
            },
        })
    )
}