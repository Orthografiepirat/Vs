import "package:flutter/material.dart";

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: Text("My first App"),
          ),
          body: Column(
            children: <Widget>[
              Text("Question"),
              RaisedButton(child: Text("Answer 1"), onPressed: null),
              RaisedButton(child: Text("Answer 2"), onPressed: null),
              RaisedButton(child: Text("Answer 3"), onPressed: null)
            ],
          )),
    );
  }
}
