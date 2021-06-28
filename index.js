function toLowerCase() {
    sp.Sleep(200);
    sp.SendKeys("^a");
    sp.SendKeys("^x");
    sp.SendString(clip.GetText().toLowerCase());
}

function toUpperCase() {
    sp.Sleep(200);
    sp.SendKeys("^a");
    sp.SendKeys("^x");
    sp.SendString(clip.GetText().toUpperCase());
}