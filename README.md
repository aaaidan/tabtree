# tabtree
Converts tabbed trees into JSON trees. Tabbed trees are easier to create and maintain, but JSON trees are needed for some software, such as many d3.js visualisations.

## Usage

Your input file should be in a format like this:

    Parent 1
    	Child 1.1
    		Grandchild 1.1.1
    		Grandchild 1.1.2
    	Child 1.2
    Parent 2
    	Child 2.1
    	Child 2.2

The indents must be tab characters, and a child must have one more tab than its parent. Blank lines are ignored.

    $ node toJSON < tabbedTree.txt
    
Resulting in:

    [
      {
        "name": "Parent 1",
        "children": [
          {
            "name": "Child 1.1",
            "children": [
              {
                "name": "Grandchild 1.1.1"
              },
              {
                "name": "Grandchild 1.1.2"
              }
            ]
          },
          {
            "name": "Child 1.2"
          }
        ]
      },
      {
        "name": "Parent 2",
        "children": [
          {
            "name": "Child 2.1"
          },
          {
            "name": "Child 2.2"
          }
        ]
      }
    ]
