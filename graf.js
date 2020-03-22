// Graf za animaciju

var treeData = [
  {
    name: "S",
    parent: "null",
    children: [
      {
        name: "A",
        parent: "S",
        children: [
          {
            name: "B",
            parent: "A",
            children: [
              {
                name: "C",
                parent: "B"
              },
              {
                name: "D",
                parent: "B",
                children: [
                  {
                    name: "E",
                    parent: "D",
                    children: [
                      {
                        name: "F",
                        parent: "E"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: "D",
            parent: "A",
            children: [
              {
                name: "B",
                parent: "D",
                children: [
                  {
                    name: "C",
                    parent: "B"
                  }
                ]
              },
              {
                name: "E",
                parent: "D",
                children: [
                  {
                    name: "F",
                    parent: "E",
                    children: [
                      {
                        name: "G",
                        parent: "F"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "D",
        parent: "A",
        children: [
          {
            name: "A",
            parent: "D",
            children: [
              {
                name: "B",
                parent: "A",
                children: [
                  {
                    name: "C",
                    parent: "B"
                  }
                ]
              }
            ]
          },
          {
            name: "B",
            parent: "D",
            children: [
              {
                name: "A",
                parent: "B"
              },
              {
                name: "C",
                parent: "B"
              }
            ]
          },
          {
            name: "E",
            parent: "D",
            children: [
              {
                name: "F",
                parent: "E",
                children: [
                  {
                    name: "G",
                    parent: "F"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
