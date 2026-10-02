function orderBelt(beltName) {
    // ⚠️ Is number '923001234567' ki jagah apna asli WhatsApp number likhein (92 ke sath)
    var phoneNumber = "923044943566"; 
    
    // Belt ka automatic message
    var message = "Assalam-o-Alaikum! Mujhe aapki website se yeh belt order karni hai: *" + beltName + "*. Kindly mujhe price aur delivery details bata dein.";
    
    // WhatsApp link
    var whatsappUrl = "https://wa.me" + phoneNumber + "?text=" + encodeURIComponent(message);
    
    // Customer ko WhatsApp par le jayein
    window.open(whatsappUrl, '_blank');
}
