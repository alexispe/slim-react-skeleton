<?php
namespace App\Controllers;


class UserController extends Controller {

  public function list($request, $response) {
    $data = array(
      array('firstname' => 'Alexis','lastname' => 'Petit'),
      array('firstname' => 'Maxime','lastname' => 'Benard'),
      array('firstname' => 'Quentin','lastname' => 'Capelle'),
      array('firstname' => 'Yoan','lastname' => '')
    );
    return $response->withJson($data, 201);
  }

  public function create($request, $response) {
    if($request->isPost()) {
      // Datas
      $firstname = $request->getParam('firstname');
      $lastname = $request->getParam('lastname');
      // Request
      $insertStatement = $this->pdo()->insert(array('firstname','lastname'))->into('card')->values(array($firstname,$lastname));
      $insertedId = $insertStatement->execute(true);
      // Redirect
      $this->flash('User created');
      return $this->redirect($response, 'userUpdate', ['id'=>$insertId]);
    }
    else {
      // Render
      return $this->render($response, 'user/create.twig');
    }
  }

  public function update($request, $response, $args) {
    if($request->isPost()) {
      // Datas
      $id = $args['id'];
      $firstname = $request->getParam('firstname');
      $lastname = $request->getParam('lastname');
      // Request
      $stmt = $this->pdo()->update(array('firstname'=>$firstname,'lastname'=>$lastname))->table('user')->where('id','=',$id);
      $affectedRows = $stmt->execute();
      // Redirect
      if($affectedRows) $this->flash('User updated');
      else $this->flash('Error','warning');
      return $this->redirect($response, 'userUpdate', array('id' => $id));
    }
    else {
      // Datas
      $id = $args['id'];
      // Request
      $stmt = $this->pdo()->select()->from('user')->where('id','=',$id);
      $stmt = $stmt->execute();
      $user = $stmt->fetch();
      // Render
      return $this->render($response, 'user/update.twig', ['user'=>$user]);
    }
  }

  public function delete($request, $response, $args) {
      // Datas
      $id = $args['id'];
      // Request
      $stmt = $this->pdo()->delete()->from('user')->where('id','=',$id);
      $affectedRows = $stmt->execute();
      // Redirect
      if($affectedRows) $this->flash('User deleted');
      else $this->flash('Error','warning');
      return $this->redirect($response, 'userList');
  }
}
