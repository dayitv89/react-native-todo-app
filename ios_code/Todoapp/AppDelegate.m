//
//  AppDelegate.m
//  Todoapp
//
//  Created by gauravds on 24/03/18.
//  Copyright © 2018 Softex Lab. All rights reserved.
//

#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#define APP_COLOR [[UIColor alloc] initWithRed:3.0f green:169.0f blue:244.0f alpha:1.0f]

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = APP_COLOR;
    UIImageView *imgView = [[UIImageView alloc] initWithFrame:self.window.frame];
    imgView.image = [UIImage imageNamed:@"splash"];
    imgView.contentMode = UIViewContentModeScaleAspectFill;
    [self.window insertSubview:imgView atIndex:0];
    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"
                                                                           fallbackResource:nil];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"todoapp"
                                                 initialProperties:nil
                                                     launchOptions:launchOptions];
    UIImageView *launchView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"splash"]];
    rootView.loadingView = launchView;
    [rootView setFrame:self.window.bounds];
    [rootView setBackgroundColor:[UIColor clearColor]];
    UIViewController *rootViewController = [UIViewController new];
    rootViewController.view = rootView;
    [rootViewController.view setBackgroundColor:APP_COLOR];
    self.window.rootViewController = rootViewController;
    [self.window makeKeyAndVisible];
    return YES;
}

@end
