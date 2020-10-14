module.exports = {
  tests: [
    {
      title: "Test Output/End",
      tests: [
        {
          title: "Without parameters",
          params: ["nexss Output/End", /Define message in the Output\/End/],
        },
        {
          title: "ifnot 1 if 0",
          params: [
            "nexss Output/End --_ifNot=1 --_if=0 messageDisplay",
            /"nexss"/,
          ],
        },
        {
          title: "ifnot 1 if 1",
          params: [
            "nexss Output/End --_ifNot=1 --_if=1 messageDisplay",
            /messageDisplay/,
          ],
        },
        {
          title: "just end",
          params: ["nexss Output/End messageDisplay", /messageDisplay/],
        },
      ],
    },
  ],
};
