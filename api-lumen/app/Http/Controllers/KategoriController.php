<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Kategori::all();

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //

        $this->validate($request, [
            'kategori' => 'required | unique:kategoris',
            'keterangan' => 'required'
        ]);

        $kategori = Kategori::create($request->all());

        if ($kategori) {
            return response()->json([
                'pesan' => 'Data sudah dimasukkan'
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int \App\Models\Kategori $kategori
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Kategori::where('idkategori', $id)->get();

        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int \App\Models\Kategori $kategori
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  \App\Models\Kategori $kategori
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $kategori = Kategori::where('idkategori', 'id')->update($request->all());

        if ($kategori) {
            return response()->json([
                'pesan' => "Data sudah diubah!"
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  \App\Models\Kategori $kategori
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

        $kategori = Kategori::where('idkategori', $id)->delete();

        if ($kategori) {
            return response()->json([
                'pesan' => "Data sudah dihapus"
            ]);
        }
    }
}
