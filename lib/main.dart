import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_dotenv/flutter_dotenv.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
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
      home: const MyHomePage(title: 'CICT QR Repository'),
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
  int index = 0;
  String dropdownValue = 'Program';
  String yearlvl = 'Year level';
  String? program, year;
  bool isLoading = false;
  TextEditingController text1 = TextEditingController();
  TextEditingController text2 = TextEditingController();
  TextEditingController text3 = TextEditingController();

  final String _baseUrl = 'https://www.googleapis.com/drive/v3';

  Future<String> getImageUrl(String fileId) async {
    // palitan mo nalang API KEY
    await dotenv.load();
    final apiKey = dotenv.env['API_KEY'];
    final url = '$_baseUrl/files/$fileId?alt=media&key=$apiKey';
    final response = await http.get(Uri.parse(url));

    if (response.statusCode == 200) {
      final bytes = response.bodyBytes;
      final base64Image = base64Encode(bytes);
      return base64Image;
    } else {
      throw Exception('Error retrieving image: ${response.reasonPhrase}');
    }
  }

  Future getFolderContents(String folderId) async {
    await dotenv.load();
    final apiKey = dotenv.env['API_KEY'];
    setState(() {
      isLoading = true;
    });

    final url =
        '$_baseUrl/files?q=trashed=false and mimeType="image/png" and "$folderId" in parents&pageSize=300&key=$apiKey';
    try {
      final response = await http.get(Uri.parse(url));

      if (response.statusCode == 200) {
        final result = json.decode(response.body);
        final files = result['files'] as List<dynamic>;
        setState(() {
          isLoading = false;
        });
        return files;
      } else if (response.statusCode == 404) {
        setState(() {
          isLoading = false;
        });
        return response.reasonPhrase;
      }
    } catch (e) {
      debugPrint(e.toString());
    }
  }

  //CS1 1jfQeo_2p8JgRwO-baia2oZDB8iF4di1r
  //CS2 1Kj0CJaNwMi8FP53OIsH7DQHUCSKRXdDO
  //CS3 114RDERQlWGjmyHWCCFXaAyBpdOwvMlaY

  //IT1 1jyVsaSb6maN4Js7tH5YWTyoPc5rM175S
  //IT2 13_4uD5RDpUFLTKZ6DHFvi9urao15xM5V
  //IT3 1TXpfpHGr7ANgiRfqPNX4P1amaR3cflTR

  //IS1 1Y1fDKy0lfAbx4SxnS9hR3NzIiNauwIK-
  //IS2 1pfXapC5tiDhDdFaYLtivr6-ETTnHv5zS
  //IS3 1PJHQ7gkIiFtM2cHq2pXtTeH9_h4JqVeX

  getQR() async {
    String driveId = '';
    if ((program == 'BSCS') && (year == '1')) {
      driveId = '1jfQeo_2p8JgRwO-baia2oZDB8iF4di1r';
    } else if ((program == 'BSCS') && (year == '2')) {
      driveId = '1Kj0CJaNwMi8FP53OIsH7DQHUCSKRXdDO';
    } else if ((program == 'BSCS') && (year == '3')) {
      driveId = '114RDERQlWGjmyHWCCFXaAyBpdOwvMlaY';
    } else if ((program == 'BSIT') && (year == '1')) {
      driveId = '1jyVsaSb6maN4Js7tH5YWTyoPc5rM175S';
    } else if ((program == 'BSIT') && (year == '2')) {
      driveId = '13_4uD5RDpUFLTKZ6DHFvi9urao15xM5V';
    } else if ((program == 'BSIT') && (year == '3')) {
      driveId = '1TXpfpHGr7ANgiRfqPNX4P1amaR3cflTR';
    } else if ((program == 'BSIS') && (year == '1')) {
      driveId = '1Y1fDKy0lfAbx4SxnS9hR3NzIiNauwIK-';
    } else if ((program == 'BSIS') && (year == '2')) {
      driveId = '1pfXapC5tiDhDdFaYLtivr6-ETTnHv5zS';
    } else if ((program == 'BSIS') && (year == '3')) {
      driveId = '1PJHQ7gkIiFtM2cHq2pXtTeH9_h4JqVeX';
    }

    /// Getting the contents of the folder and checking if the file is there.
    try {
      final files = await getFolderContents(driveId);
      bool fileFound = false;
      if (files.isNotEmpty) {
        for (final data in files) {
          if (data['name'] == '$idNum.png') {
            showQR(data['id']);
            fileFound = true;
            break;
          }
        }
      }
      if (!fileFound) {
        debugPrint('Error, not found');
        showError();
      }
    } catch (e) {
      debugPrint(e.toString());
    }
  }

  showError() {
    showDialog(
        context: context,
        builder: ((context) => AlertDialog(
              title: const Text("Oh no!"),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Image.asset('assets/error.png', width: 100, height: 100),
                  const Text(
                      "I'm tired looking but found nothing, please contact your year level representative."),
                ],
              ),
            )));
  }

  showQR(String img) {
    showDialog(
        context: context,
        builder: ((context) => AlertDialog(
              content: FutureBuilder(
                  future: getImageUrl(img),
                  builder: (contex, snapshot) {
                    if (snapshot.connectionState == ConnectionState.done) {
                      return Image.memory(base64Decode(snapshot.data!));
                    }
                    return const SizedBox(
                        width: 50,
                        height: 100,
                        child: Center(child: Text('Please wait...')));
                  }),
            )));
  }

  defaultContent() {
    switch (index) {
      case 0:
        return Stack(children: [
          Center(
            child: Visibility(
                visible: isLoading,
                child: const CircularProgressIndicator(color: Colors.blue)),
          ),
          SingleChildScrollView(
            child: Center(
              child: Column(children: [
                const SizedBox(height: 30),
                Form(
                  key: _formKey,
                  child: Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Expanded(
                              child: Padding(
                                padding: const EdgeInsets.only(right: 8.0),
                                child: TextFormField(
                                    validator: (value) {
                                      if (value == null || value.isEmpty) {
                                        return 'Please enter your Program';
                                      }
                                      return null;
                                    },
                                    controller: text1,
                                    decoration: const InputDecoration(
                                      border: OutlineInputBorder(),
                                      hintText:
                                          'Enter Program (BSCS/BSIT/BSIS)',
                                      labelText: 'Program',
                                    ),
                                    inputFormatters: [
                                      FilteringTextInputFormatter.allow(
                                          RegExp("[BSCITbscit]")),
                                    ]),
                              ),
                            ),
                            Expanded(
                              child: Padding(
                                padding: const EdgeInsets.only(left: 8.0),
                                child: TextFormField(
                                    validator: (value) {
                                      if (value == null || value.isEmpty) {
                                        return 'Please enter your year level';
                                      }
                                      return null;
                                    },
                                    controller: text2,
                                    decoration: const InputDecoration(
                                      border: OutlineInputBorder(),
                                      hintText: 'Enter Year level',
                                      labelText: 'Year level',
                                    ),
                                    inputFormatters: [
                                      FilteringTextInputFormatter.allow(
                                          RegExp("[1234]")),
                                    ]),
                              ),
                            ),
                          ],
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: TextFormField(
                            validator: (value) {
                              if (value == null || value.isEmpty) {
                                return 'Please enter your ID Number';
                              }
                              return null;
                            },
                            controller: text3,
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              hintText: 'Enter ID Number',
                              labelText: 'ID Number',
                            ),
                            inputFormatters: [
                              FilteringTextInputFormatter.allow(
                                  RegExp("[0-9-]")),
                            ]),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 30),
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                      textStyle: const TextStyle(fontSize: 18)),
                  onPressed: () {
                    if (_formKey.currentState!.validate()) {
                      program = text1.text.toUpperCase();
                      year = text2.text;
                      idNum = text3.text;
                      getQR();
                    }
                  },
                  child: const Text('Submit'),
                ),
              ]),
            ),
          )
        ]);
      // case 1:
      //   return Center(
      //     child: Column(children: const [
      //       Text('QR not found?'),
      //       Text(
      //           'Please message your respective Year level representative regarding your queries. Thank You!'),
      //     ]),
      //   );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              CircleAvatar(child: Image.asset('assets/csc.png')),
              const SizedBox(width: 10),
              Text(widget.title),
            ],
          ),
        ),
        body: defaultContent());
  }
}
