<?php
namespace App\Controllers;


class AppController extends Controller {

  public function start($request, $response) {
    return $this->render($response, 'index.twig');
  }
}
