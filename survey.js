const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let result = "Hello! ";

rl.question(
  "What's your name? Nicknames are also acceptable :) ",
  (answer1) => {
    result += "I am " + answer1;

    rl.question("What's an activity you like doing? ", (answer2) => {
      result = result + ". I love to " + answer2;

      rl.question("What do you listen to while doing that? ", (answer3) => {
        result += " and listen " + answer3 + ".";

        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
          (answer4) => {
            result += " In " + answer4;

            rl.question(
              "What's your favourite thing to eat for that meal? ",
              (answer5) => {
                result += " I love eating " + answer5;

                rl.question(
                  "Which sport is your absolute favourite? ",
                  (answer6) => {
                    result += "  and I like to play " + answer6;

                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at! ",
                      (answer7) => {
                        console.log(
                          `Thank you for your valuable feedback: Your Fun Profile: ` +
                            result +
                            ". I am great in " +
                            `${answer7}` +
                            "."
                        );
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
