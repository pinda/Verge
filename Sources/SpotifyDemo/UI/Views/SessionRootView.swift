//
//  SessionRootView.swift
//  SpotifyDemo
//
//  Created by muukii on 2020/01/18.
//  Copyright © 2020 muukii. All rights reserved.
//

import Foundation

import SwiftUI

import SpotifyService

struct SessionRootView: View {
  
  @EnvironmentObject var session: Session
  
  private var loggedInStack: LoggedInStack? {
    switch session.stack.stack {
    case .loggedIn(let stack):
      return stack
    case .loggedOut:
      return nil
    }
  }
  
  private var loggedOutStack: LoggedOutStack? {
    switch session.stack.stack {
    case .loggedIn:
      return nil
    case .loggedOut(let stack):
      return stack
    }
  }
  
  var body: some View {
    ZStack {
      if loggedInStack != nil {
        LoggedInView(stack: loggedInStack!)
      }
      if loggedOutStack != nil {
        LoggedOutView(stack: loggedOutStack!)
      }
    }
  }
  
}
