// Для работы с моделью представления используются выражения javascript, которые определяются с помощью тега <% выражение %>.
const express = require("express");
const app = express();
 
app.set("view engine", "ejs");
app.use("/contact", (req, res)=>{
     
    res.render("contact", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});
app.use("/", (req, res)=>{
     
    res.send("Главная страница");
});
app.listen(3000);

// EJS позволяет вставлять код одних представлений в другие с помощью функции include.