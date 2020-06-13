function message()
{
    let mood = document.querySelector('#mood').value;
    if(mood === "happy")
    {
        text_message = "Great! Lets dive in to some Math Exercises!"
    }
    else if(mood === "heh")
    {
        text_message = "\n Why is 7 the most feared number?... \n \n ...Because 7,8,9 ... aho ho ho..!"
    }
    else
    {
        text_message = "Come on! NO sad Faces! lets practive some addition exercises to ADD Happines!"
    }
    alert(text_message);
}