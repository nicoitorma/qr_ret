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
  String? idNum;
  String dropdownValue = 'Program';
  String? value1;
  TextEditingController text1 = TextEditingController();
  TextEditingController text2 = TextEditingController();

  Future<Uint8List> loadImageFromAssets(String path) async {
    ByteData imageData = await rootBundle.load(path);
    return imageData.buffer.asUint8List();
  }

  showQR() {
    showDialog(
        context: context,
        builder: (context) => AlertDialog(
              content: FutureBuilder(
                  future: loadImageFromAssets('assets/$value1/$idNum.png'),
                  builder: (context, snapshot) {
                    if (snapshot.connectionState == ConnectionState.done) {
                      Uint8List bytes = snapshot.data as Uint8List;
                      return Image.memory(bytes);
                    } else {
                      return const CircularProgressIndicator();
                    }
                  }),
            ));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(children: [
          const SizedBox(height: 30),
          const Text('CICT QR Repository'),
          const SizedBox(height: 30),
          Form(
            key: _formKey,
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your ID Number';
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
            ),
          ),
          const SizedBox(height: 30),
          DropdownButton<String>(
            hint: const Text('Program'),
            value: value1,
            items: <String>['BSCS', 'BSInfo.Tech', 'BSIS']
                .map<DropdownMenuItem<String>>((String value) {
              return DropdownMenuItem<String>(
                value: value,
                child: Text(
                  value,
                  style: const TextStyle(fontSize: 18),
                ),
              );
            }).toList(),
            onChanged: (String? newValue) {
              setState(() {
                value1 = newValue!;
              });
            },
          ),
          const SizedBox(height: 30),
          ElevatedButton(
            onPressed: () {
              if (_formKey.currentState!.validate()) {
                idNum = text2.text;
                showQR();
              }
            },
            child: const Text('Submit'),
          ),
        ]),
      ),
    );
  }
}
