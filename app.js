const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Are you feeling behind in life?

You are not behind in life. There's no schedule or timeline that we must follow. It's all made up. Wherever you are right now is exactly where you need to be. Seven billion people can't do everything in exactly the same scheduled order. We are different with a variety of needs and goals. Some get married early, some get married late, while others don't get married at all. What is early? What is late? Compared with whom? Compared with what? Some want children, others don't. Some want a career, others enjoy taking care of a house and children. Your life is not on anyone else's schedule. Don't beat yourself up right now. It's your timeline, not anyone else's, and nothing is off schedule. Everything is happening for you, not against you. Trust the timing of your life because the best is yet to come.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
