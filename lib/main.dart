import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CICT QR Retriever',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'HEHE'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final _formKey = GlobalKey<FormState>();
  String? idNum, course, year;
  TextEditingController text1 = TextEditingController();
  TextEditingController text2 = TextEditingController();
  TextEditingController text3 = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          children: [
            Form(
              key: _formKey,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 8.0),
                        child: TextFormField(
                            validator: (value) {
                              if (value == null || value.isEmpty) {
                                return 'Please enter your Course/Program';
                              }
                              return null;
                            },
                            controller: text1,
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              hintText: 'Enter Program',
                              labelText: 'Program',
                            ),
                            inputFormatters: [
                              FilteringTextInputFormatter.allow(RegExp("[BSCITbscit]")),
                            ]),
                      ),
                      TextFormField(
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter some text';
                            }
                            return null;
                          },
                          controller: text2,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            hintText: 'Enter ID Number',
                            labelText: 'ID Number',
                          ),
                          inputFormatters: [
                            FilteringTextInputFormatter.allow(RegExp("[0-9-]")),
                          ]),
                      ElevatedButton(
                        onPressed: () {
                          if (_formKey.currentState!.validate()) {
                            idNum = text2.text;
                            setState(() {});
                          }
                        },
                        child: const Text('Submit'),
                      ),
                    ]),
              ),
            ),
            idNum == null
                ? Text('NULL')
                : Image.asset(
                    'assets/BSCS3/${idNum}.png',
                    width: 200,
                    height: 200,
                  ),
          ],
        ),
      ),
      // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
