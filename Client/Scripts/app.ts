// IIFE - immediately invoked function expression
// AKA - anonymous self executing function (closure)
(function () 
{
    function Start(): void
    {
        console.info("App Started...");
    }
    window.addEventListener("load", Start);
})();